"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TimelinePage() {
  const interactions = [
    { type: "Meetup", friend: "Tom Baker", date: "March 29, 2026", icon: "/assets/text.png" },
    { type: "Text", friend: "Sarah Chen", date: "March 28, 2026", icon: "/assets/text.png" },
    { type: "Meetup", friend: "Olivia Martinez", date: "March 26, 2026", icon: "/assets/text.png" },
    { type: "Video", friend: "Aisha Patel", date: "March 23, 2026", icon: "/assets/video.png" },
    { type: "Meetup", friend: "Sarah Chen", date: "March 21, 2026", icon: "/assets/text.png" },
    { type: "Call", friend: "Marcus Johnson", date: "March 19, 2026", icon: "/assets/call.png" },
    { type: "Meetup", friend: "Aisha Patel", date: "March 17, 2026", icon: "/assets/text.png" },
    { type: "Text", friend: "Olivia Martinez", date: "March 13, 2026", icon: "/assets/text.png" },
    { type: "Call", friend: "Lisa Nakamura", date: "March 11, 2026", icon: "/assets/call.png" },
    { type: "Call", friend: "Sarah Chen", date: "March 11, 2026", icon: "/assets/call.png" },
    { type: "Video", friend: "Marcus Johnson", date: "March 6, 2026", icon: "/assets/video.png" },
    { type: "Video", friend: "Ryan O'Brien", date: "February 24, 2026", icon: "/assets/video.png" },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-black text-zinc-900 tracking-tight">Timeline</h1>
          <select className="select select-bordered w-full max-w-xs rounded-2xl border-zinc-200 font-bold">
            <option>Filter timeline</option>
            <option>Calls</option>
            <option>Texts</option>
            <option>Video</option>
            <option>Meetups</option>
          </select>
        </div>

        <div className="space-y-4">
          {interactions.map((event, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center p-3">
                <img src={event.icon} alt={event.type} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-zinc-900 tracking-tight">
                  <span className="text-zinc-400">{event.type}</span> with {event.friend}
                </h3>
                <p className="text-sm font-bold text-zinc-400">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
