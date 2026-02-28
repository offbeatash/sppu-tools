"use client";
import { useState } from 'react';

export default function CGPACalculator() {
  const [semCount, setSemCount] = useState(2);
  const [semData, setSemData] = useState(
    Array.from({ length: 8 }, () => ({ sgpa: '', credits: '' }))
  );
  const [result, setResult] = useState<number | null>(null);

  // UPDATED FUNCTION: Added validation here
  const handleInputChange = (index: number, field: 'sgpa' | 'credits', value: string) => {
    if (field === 'sgpa' && value !== '') {
      const numValue = parseFloat(value);
      if (numValue > 10) {
        alert("SGPA cannot be greater than 10.0!");
        return; // Stops the state from updating with the invalid number
      }
      if (numValue < 0) return; // Prevent negative SGPAs
    }

    const newData = [...semData];
    newData[index][field] = value;
    setSemData(newData);
  };

  const handleCalculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < semCount; i++) {
      const sgpa = parseFloat(semData[i].sgpa);
      const credits = parseFloat(semData[i].credits);

      if (!isNaN(sgpa) && !isNaN(credits)) {
        totalPoints += sgpa * credits;
        totalCredits += credits;
      }
    }

    if (totalCredits > 0) {
      setResult(totalPoints / totalCredits);
    } else {
      alert("Please enter valid SGPA and Credits.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-slate-900 border border-slate-800 rounded-2xl mt-12">
      <h1 className="text-2xl font-bold text-white mb-2">SPPU CGPA Calculator</h1>
      <p className="text-slate-400 mb-6 text-sm">Enter your SGPA and Total Credits for each semester.</p>

      <div className="mb-8">
        <label className="text-slate-300 block mb-2 font-medium">How many semesters completed?</label>
        <select 
          className="w-full bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-orange-500"
          value={semCount}
          onChange={(e) => setSemCount(parseInt(e.target.value))}
        >
          {[2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} Semesters</option>
          ))}
        </select>
      </div>

      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-4 px-2">
          <span className="text-sm font-bold text-slate-500 uppercase">SGPA (Max 10)</span>
          <span className="text-sm font-bold text-slate-500 uppercase">Credits</span>
        </div>

        {Array.from({ length: semCount }).map((_, i) => (
          <div key={i} className="flex gap-4 items-center bg-slate-800/50 p-2 rounded-lg">
            <span className="text-slate-400 font-medium w-16">Sem {i + 1}</span>
            <input 
              type="number" 
              step="0.01"
              max="10"
              placeholder="e.g. 8.50"
              value={semData[i].sgpa}
              className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 outline-none transition-colors"
              onChange={(e) => handleInputChange(i, 'sgpa', e.target.value)}
            />
            <input 
              type="number" 
              placeholder="e.g. 22"
              value={semData[i].credits}
              className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 outline-none transition-colors"
              onChange={(e) => handleInputChange(i, 'credits', e.target.value)}
            />
          </div>
        ))}
      </div>

      <button 
        onClick={handleCalculate}
        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20"
      >
        Calculate Final CGPA
      </button>

      {result && (
        <div className="mt-8 p-6 bg-orange-600/10 border border-orange-500/30 rounded-xl text-center">
          <p className="text-slate-400 text-sm">Your Cumulative CGPA is:</p>
          <h2 className="text-5xl font-black text-orange-500">{result.toFixed(2)}</h2>
          <p className="text-sm text-slate-400 mt-2 font-medium">Indicative Percentage: {((result - 0.75) * 10).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}