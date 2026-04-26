"use client";

import { useParams, useRouter } from "next/navigation";
import data from "../../../lib/data.json";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useTimeline } from "../../../context/TimelineContext";

export default function FriendDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addInteraction } = useTimeline();
  const friendId = parseInt(params.id);
  const friend = data.find(f => f.id === friendId);

  const handleCheckIn = (type, icon) => {
    addInteraction({
      type,
      friend: friend.name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon
    });
    router.push('/timeline');
  };

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Friend not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Detail Header Section */}
        <div className="bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-xl flex flex-col md:flex-row gap-12">
          {/* Left Column: Profile Card */}
          <div className="md:w-1/3 min-w-[300px] bg-[#f8faf9] p-10 rounded-[2.5rem] text-center space-y-6 border border-zinc-50 shadow-sm">
            <div className="relative mx-auto w-32 h-32">
               <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} 
                  alt={friend.name} 
                  className="w-full h-full rounded-full border-4 border-white shadow-lg"
               />
            </div>
            <div>
              <h1 className="text-3xl font-black text-zinc-900 tracking-tight">{friend.name}</h1>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">Overdue</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">Family</span>
              </div>
            </div>
            <p className="text-zinc-500 font-bold italic">"{friend.bio}"</p>
            <p className="text-sm font-bold text-zinc-400">Preferred: email</p>
            
            <div className="space-y-4 pt-6">
              <button className="btn btn-ghost w-full justify-center gap-2 rounded-2xl font-bold bg-zinc-100/50">
                <img src="/assets/call.png" className="w-5 h-5 opacity-20" /> Snooze 2 Weeks
              </button>
              <button className="btn btn-ghost w-full justify-center gap-2 rounded-2xl font-bold bg-zinc-100/50">
                <img src="/assets/text.png" className="w-5 h-5 opacity-20" /> Archive
              </button>
              <button className="btn btn-ghost w-full justify-center gap-2 rounded-2xl font-bold text-red-500 bg-red-50/50 border border-red-100 hover:bg-red-50">
                <img src="/assets/logo.png" className="w-5 h-5 grayscale opacity-20" /> Delete
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Actions */}
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f8faf9] p-8 rounded-3xl border border-zinc-50 text-center">
                <p className="text-3xl font-black text-zinc-900">{friend.days_since_contact}</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Days Since Contact</p>
              </div>
              <div className="bg-[#f8faf9] p-8 rounded-3xl border border-zinc-50 text-center">
                <p className="text-3xl font-black text-zinc-900">{friend.goal}</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Goal (Days)</p>
              </div>
              <div className="bg-[#f8faf9] p-8 rounded-3xl border border-zinc-50 text-center">
                <p className="text-xl font-black text-zinc-900">{friend.next_due_date}</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Next Due</p>
              </div>
            </div>

            <div className="bg-white border border-zinc-100 p-8 rounded-3xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-black text-zinc-900">Relationship Goal</h3>
                <button className="btn btn-xs bg-zinc-100 rounded-lg border-none font-bold">Edit</button>
              </div>
              <p className="text-zinc-600 font-medium">Connect every <span className="font-black text-zinc-900">{friend.goal} days</span></p>
            </div>

            <div className="space-y-4">
               <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">Quick Check-In</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <button onClick={() => handleCheckIn('Call', '/assets/call.png')} className="btn h-24 bg-white border border-zinc-100 rounded-3xl flex flex-col gap-2 hover:bg-zinc-50">
                   <img src="/assets/call.png" className="h-6" />
                   <span className="font-bold text-zinc-900">Call</span>
                 </button>
                 <button onClick={() => handleCheckIn('Text', '/assets/text.png')} className="btn h-24 bg-white border border-zinc-100 rounded-3xl flex flex-col gap-2 hover:bg-zinc-50">
                   <img src="/assets/text.png" className="h-6" />
                   <span className="font-bold text-zinc-900">Text</span>
                 </button>
                 <button onClick={() => handleCheckIn('Video', '/assets/video.png')} className="btn h-24 bg-white border border-zinc-100 rounded-3xl flex flex-col gap-2 hover:bg-zinc-50">
                   <img src="/assets/video.png" className="h-6" />
                   <span className="font-bold text-zinc-900">Video</span>
                 </button>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
