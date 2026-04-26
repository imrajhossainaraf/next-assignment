"use client";

import { useAuth } from "../../hooks/useauth.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <span className="loading loading-spinner loading-lg text-[#1a3a32]"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-xl space-y-12">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 border-b border-zinc-100 pb-12">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-emerald-500 to-teal-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative avatar">
                <div className="w-32 h-32 rounded-full ring-4 ring-white shadow-2xl">
                  <img src={user?.image} alt={user?.name} className="rounded-full" />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-4xl font-black text-zinc-900 tracking-tight">{user?.name}</h1>
              <p className="text-lg font-bold text-zinc-400">{user?.email}</p>
              <div className="flex gap-2 pt-2 justify-center md:justify-start">
                <span className="px-4 py-1.5 bg-[#f8faf9] text-[#1a3a32] rounded-full text-xs font-black uppercase tracking-widest border border-zinc-100">
                  Premium Account
                </span>
                <span className="px-4 py-1.5 bg-zinc-900 text-white rounded-full text-xs font-black uppercase tracking-widest">
                  Active
                </span>
              </div>
            </div>
            <div className="md:ml-auto">
              <button 
                onClick={logout}
                className="btn bg-red-50 text-red-600 border-red-100 hover:bg-red-100 rounded-2xl px-8 font-black"
              >
                Sign Out
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8faf9] p-8 rounded-3xl border border-zinc-50 space-y-4">
               <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">Personal Bio</h3>
               <p className="font-bold text-zinc-900 leading-relaxed italic text-lg">
                 "Passionate about building deep, lasting relationships and staying connected with the people who matter most."
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f8faf9] p-6 rounded-3xl border border-zinc-50 text-center flex flex-col justify-center">
                 <p className="text-3xl font-black text-zinc-900">14</p>
                 <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Day Streak</p>
              </div>
              <div className="bg-[#f8faf9] p-6 rounded-3xl border border-zinc-50 text-center flex flex-col justify-center">
                 <p className="text-3xl font-black text-zinc-900">128</p>
                 <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Total Points</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
