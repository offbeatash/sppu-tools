"use client";
import { useState } from 'react';

export default function PercentageConverter() {
  const [cgpa, setCgpa] = useState('');
  const [result, setResult] = useState<{ perc: number; grade: string; degreeClass: string } | null>(null);

  const handleInputChange = (value: string) => {
    if (value !== '') {
      const numValue = parseFloat(value);
      if (numValue > 10) {
        alert("CGPA cannot be greater than 10.0!");
        return;
      }
      if (numValue < 0) return; 
    }
    setCgpa(value);
    setResult(null); 
  };

  const handleCalculate = () => {
    const val = parseFloat(cgpa);

    if (isNaN(val) || val < 0 || val > 10) {
      alert("Please enter a valid CGPA.");
      return;
    }

    let perc = 0;
    let grade = '';
    let degreeClass = '';

    // Official SPPU Circular 332-2020 Logic
    if (val >= 9.50) {
      perc = 20 * val - 100;
      grade = 'O';
    } else if (val >= 8.25) {
      perc = 12 * val - 25;
      grade = 'A+';
    } else if (val >= 6.75) {
      perc = 10 * val - 7.5;
      grade = 'A';
    } else if (val >= 5.75) {
      perc = 5 * val + 26.25;
      grade = 'B+';
    } else if (val >= 5.25) {
      perc = 10 * val - 2.5;
      grade = 'B';
    } else if (val >= 4.75) {
      perc = 10 * val - 2.5;
      grade = 'C';
    } else if (val >= 4.00) {
      perc = 6.6 * val + 13.6;
      grade = 'D/P';
    } else {
      perc = 0;
      grade = 'F';
    }

    // SPPU Class Awarded Scale
    if (val >= 7.75) degreeClass = 'First Class With Distinction';
    else if (val >= 6.75) degreeClass = 'First Class';
    else if (val >= 6.25) degreeClass = 'Higher Second Class';
    else if (val >= 5.50) degreeClass = 'Second Class';
    else if (val >= 4.00) degreeClass = 'Pass Class';
    else degreeClass = 'Fail';

    setResult({ perc: parseFloat(perc.toFixed(2)), grade, degreeClass });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      {/* Calculator Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">SPPU Percentage Converter</h1>
        <p className="text-slate-400 mb-6 text-sm">Based on Official SPPU Circular No. 332-2020</p>

        <div className="mb-6">
          <label className="text-slate-300 block mb-2 font-medium">Enter your CGPA</label>
          <input 
            type="number" 
            step="0.01"
            max="10"
            placeholder="e.g. 8.50"
            value={cgpa}
            className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-orange-500 outline-none transition-colors text-lg"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <button 
          onClick={handleCalculate}
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20 mb-6"
        >
          Convert to Percentage
        </button>

        {result && (
          <div className="p-6 bg-slate-800 border border-orange-500/30 rounded-xl text-center animate-in fade-in zoom-in duration-300">
            <p className="text-slate-400 text-sm mb-1">Equivalent Percentage</p>
            <h2 className="text-5xl font-black text-orange-500 mb-4">{result.perc}%</h2>
            
            <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-4 mt-4">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Grade</p>
                <p className="text-xl font-bold text-white">{result.grade}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Degree Class</p>
                <p className="text-lg font-bold text-white">{result.degreeClass}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Official SPPU Conversion Formulas Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl overflow-x-auto mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Official SPPU Conversion Formulas (Circular No. 332-2020)</h3>
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              <th className="p-3 rounded-tl-lg">CGPA Range</th>
              <th className="p-3">Formula for Percentage</th>
              <th className="p-3 rounded-tr-lg">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 border-b border-slate-800">
            <tr><td className="p-3">9.50 and above</td><td className="p-3">20 * CGPA - 100</td><td className="p-3">O</td></tr>
            <tr><td className="p-3">8.25 to 9.50</td><td className="p-3">12 * CGPA - 25</td><td className="p-3">A+</td></tr>
            <tr><td className="p-3">6.75 to 8.25</td><td className="p-3">10 * CGPA - 7.5</td><td className="p-3">A</td></tr>
            <tr><td className="p-3">5.75 to 6.75</td><td className="p-3">5 * CGPA + 26.25</td><td className="p-3">B+</td></tr>
            <tr><td className="p-3">5.25 to 5.75</td><td className="p-3">10 * CGPA - 2.5</td><td className="p-3">B</td></tr>
            <tr><td className="p-3">4.75 to 5.25</td><td className="p-3">10 * CGPA - 2.5</td><td className="p-3">C</td></tr>
            <tr><td className="p-3">4.00 to 4.75</td><td className="p-3">6.6 * CGPA + 13.6</td><td className="p-3">D/P</td></tr>
          </tbody>
        </table>
      </div>

      {/* SPPU Class Awarded Scale Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl overflow-x-auto">
        <h3 className="text-lg font-bold text-white mb-4">SPPU Class Awarded Scale (Relation between CGPA and Degree)</h3>
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              <th className="p-3 rounded-tl-lg">CGPA Range</th>
              <th className="p-3 rounded-tr-lg">Degree Class</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 border-b border-slate-800">
            <tr><td className="p-3">7.75 and above</td><td className="p-3">First Class With Distinction</td></tr>
            <tr><td className="p-3">6.75 to 7.74</td><td className="p-3">First Class</td></tr>
            <tr><td className="p-3">6.25 to 6.74</td><td className="p-3">Higher Second Class</td></tr>
            <tr><td className="p-3">5.50 to 6.24</td><td className="p-3">Second Class</td></tr>
            <tr><td className="p-3">4.00 to 5.49</td><td className="p-3">Pass Class</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}