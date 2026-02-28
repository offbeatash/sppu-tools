import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          SPPU <span className="text-orange-500">Tools</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto text-lg">
          The ultimate, lightning-fast toolkit for SPPU Engineering students. Select a tool below to get started.
        </p>
      </div>

      {/* Services/Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        
        {/* CGPA Calculator Card */}
        <Link 
          href="/cgpa" 
          className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/50"
        >
          <div className="bg-orange-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
            {/* Simple SVG Icon for Calculator */}
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            CGPA Calculator
          </h2>
          <p className="text-slate-400 line-clamp-2">
            Calculate your final cumulative grade point average accurately using your semester SGPAs and credits.
          </p>
        </Link>

        {/* Percentage Converter Card */}
        <Link 
          href="/percentage" 
          className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/50"
        >
          <div className="bg-orange-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
            {/* Simple SVG Icon for Percentage */}
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            Percentage Converter
          </h2>
          <p className="text-slate-400 line-clamp-2">
            Instantly convert your CGPA into the official SPPU percentage format for resumes and placements.
          </p>
        </Link>

      </div>
    </div>
  );
}