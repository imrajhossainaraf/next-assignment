"use client";

import data from "../../lib/data.json";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../hooks/useauth";
import Link from "next/link";

export default function HomePage() {
  const { user } = useAuth();

  // Simple stats calculation
  const totalFriends = data.length;
  const onTrack = data.filter(f => f.status === "active").length;
  const needAttention = data.filter(f => f.status === "overdue").length;
  const interactionsThisMonth = 12; // Mocked for now

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12 border-b border-zinc-200 border-dashed">
          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#1a3a32] hover:bg-[#2a5a4e] text-white rounded-full px-8 border-none font-bold">
            + Add a Friend
          </button>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Friends", value: totalFriends },
            { label: "On Track", value: onTrack },
            { label: "Need Attention", value: needAttention },
            { label: "Interactions This Month", value: interactionsThisMonth },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm text-center">
              <p className="text-3xl font-black text-zinc-900">{stat.value}</p>
              <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Friends Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black text-zinc-900">Your Friends</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((friend) => (
              <Link href={`/friend/${friend.id}`} key={friend.id}>
                <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-center space-y-4">
                  <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-zinc-100 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} 
                      alt={friend.name} 
                      className="relative w-24 h-24 rounded-full border-4 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-zinc-900 tracking-tight">{friend.name}</h3>
                    <p className="text-sm font-bold text-zinc-400">{friend.days_since_contact}d ago</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {friend.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-100">
                        {tag}
                      </span>
                    ))}
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      friend.status === "active" 
                      ? "bg-green-50 text-green-700 border-green-100" 
                      : "bg-red-50 text-red-700 border-red-100"
                    }`}>
                      {friend.status === "active" ? "On Track" : "Overdue"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Profile Card */}
      {user && (
        <Link href="/dashboard">
          <div className="fixed bottom-8 right-8 bg-zinc-900 text-white p-4 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/10 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20">
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-black text-sm">{user.name}</p>
              <p className="text-xs font-bold text-zinc-400">{user.email}</p>
            </div>
            <div className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
