export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12 border-t-2 border-ink">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-orange rounded-[8px] rotate-[8deg]"></div>
            <div className="absolute inset-0 bg-ink rounded-[8px] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-lime"></div>
            </div>
          </div>
          <span className="font-display font-extrabold text-xl">STRIDE</span>
          <span className="font-mono text-[10px] tracking-widest text-ink/50">© 2026</span>
        </div>
        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium">
          <a href="#" className="hover:text-orange">Twitter</a>
          <a href="#" className="hover:text-orange">Instagram</a>
          <a href="#" className="hover:text-orange">TikTok</a>
          <a href="#" className="hover:text-orange">Press</a>
          <a href="#" className="hover:text-orange">Privacy</a>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-ink/60 uppercase">
          Built loud · Made to be tracked
        </div>
      </div>
    </footer>
  )
}
