export default function Footer() {
  return (
    <footer className="bg-[#1a3a32] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-black tracking-tight">KeenKeeper</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Social Links</h3>
          <div className="flex justify-center gap-6">
            <a href="#"><img src="/assets/twitter.png" alt="Twitter" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" /></a>
            <a href="#"><img src="/assets/facebook.png" alt="Facebook" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" /></a>
            <a href="#"><img src="/assets/instagram.png" alt="Instagram" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" /></a>
          </div>
        </div>

        <div className="pt-16 flex flex-col md:flex-row justify-between items-center border-t border-white/5 text-sm font-medium text-zinc-500 gap-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
