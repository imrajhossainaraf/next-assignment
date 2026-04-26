"use client";

import { useAuth } from "../hooks/useauth.js";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const { login, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 selection:bg-white/20">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden animate-in fade-in zoom-in slide-in-from-top-4 duration-700">
        <div className="p-10 md:p-14 space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              Aura <span className="text-indigo-200 italic">Auth</span>
            </h1>
            <p className="text-indigo-50 text-lg font-bold tracking-wide">
              Secure Sign-in to your Creative Hub
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={login}
              className="group relative w-full flex items-center justify-center px-6 py-5 border border-transparent text-lg font-black rounded-[1.5rem] text-zinc-900 bg-white hover:bg-zinc-100 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <svg 
                className="w-8 h-8 mr-4 fill-zinc-900 group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>
        </div>

        <div className="bg-black/20 px-10 py-6 text-center border-t border-white/10">
          <p className="text-sm text-indigo-100/90 font-bold uppercase tracking-[0.2em]">
            Premium Assignment Portal 2026
          </p>
        </div>
      </div>
    </div>
  );
}
