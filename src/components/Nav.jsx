export default function Nav() {
  return (
    <nav className="relative z-30 flex items-center justify-between px-6 md:px-10 py-5">
      <a href="#" className="flex items-center gap-2">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 bg-orange rounded-[10px] rotate-[8deg]"></div>
          <div className="absolute inset-0 bg-ink rounded-[10px] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-lime pulse-dot"></div>
          </div>
        </div>
        <span className="font-display font-extrabold text-2xl tracking-tight">STRIDE</span>
        <span className="font-mono text-[10px] tracking-widest text-ink/50 self-end mb-1">v4.0</span>
      </a>
      <ul className="hidden md:flex items-center gap-7 text-[15px] font-medium">
        {["Product", "Pricing", "Stories", "Changelog"].map((l) => (
          <li key={l}>
            <a href="#" className="relative group">
              <span>{l}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href="#" className="hidden sm:block text-[15px] font-semibold">Log in →</a>
        <a href="#" className="btn-primary bg-ink text-paper px-5 py-2.5 rounded-full font-semibold text-[14px] hover:bg-orange transition-colors">
          Start a streak
        </a>
      </div>
    </nav>
  )
}
