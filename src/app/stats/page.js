"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StatsPage() {
  const stats = [
    { type: "Text", value: 33, color: "text-[#8b5cf6]" },
    { type: "Call", value: 42, color: "text-[#1a3a32]" },
    { type: "Video", value: 25, color: "text-[#22c55e]" },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-5xl font-black text-zinc-900 tracking-tight text-center md:text-left">
          Friendship Analytics
        </h1>

        <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 shadow-sm flex flex-col items-center justify-center space-y-8 min-h-[500px]">
          <h2 className="text-xl font-bold text-zinc-400 uppercase tracking-widest">By Interaction Type</h2>
          
          <div className="relative w-80 h-80">
            {/* Custom SVG Donut Chart */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Text Segment */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent" stroke="#8b5cf6"
                strokeWidth="12" strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.33)}
                className="transition-all duration-1000 ease-out"
              />
              {/* Call Segment */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent" stroke="#1a3a32"
                strokeWidth="12" strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.75)}
                className="transition-all duration-1000 ease-out"
              />
              {/* Video Segment */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent" stroke="#22c55e"
                strokeWidth="12" strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 1.0)}
                className="transition-all duration-1000 ease-out"
              />
              
              {/* Center point */}
              <circle cx="50" cy="50" r="34" fill="white" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col">
               <p className="text-4xl font-black text-zinc-900 tracking-tighter">100%</p>
               <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Logged</p>
            </div>
          </div>

          <div className="flex gap-12 pt-8">
            {stats.map(stat => (
              <div key={stat.type} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${stat.color === 'text-[#1a3a32]' ? 'bg-[#1a3a32]' : stat.color === 'text-[#8b5cf6]' ? 'bg-[#8b5cf6]' : 'bg-[#22c55e]'}`}></div>
                <span className="text-sm font-black text-zinc-500 uppercase tracking-widest">{stat.type}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
