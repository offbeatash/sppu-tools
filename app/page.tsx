import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">SPPU Tools</h1>
      <p className="text-slate-400 mb-8 max-w-md">
        The ultimate toolkit for SPPU Engineering students. Calculate your CGPA, convert to percentages, and more.
      </p>

      {/* Notice the href is now exactly matching your new folder name: "/cgpa" */}
      <Link 
        href="/cgpa" 
        className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-orange-900/20"
      >
        Go to CGPA Calculator
      </Link>
    </div>
  );
}