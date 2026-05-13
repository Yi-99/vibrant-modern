export default function TopChrome({ onBack }) {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-5">
      <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = '' }} className="flex items-center gap-2 group">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 bg-orange rounded-[10px] rotate-[8deg] group-hover:rotate-[14deg] transition-transform"></div>
          <div className="absolute inset-0 bg-ink rounded-[10px] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-lime pulse-dot"></div>
          </div>
        </div>
        <span className="font-display font-extrabold text-2xl tracking-tight">STRIDE</span>
        <span className="font-mono text-[10px] tracking-widest text-ink/50 self-end mb-1">v4.0</span>
      </a>
      <div className="flex items-center gap-3">
        {onBack && (
          <button onClick={onBack} className="font-mono text-[12px] tracking-wider uppercase flex items-center gap-1.5 hover:text-orange transition-colors">
            <span>←</span> Back
          </button>
        )}
        <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = '' }} className="hidden sm:flex tag hover:bg-ink hover:text-paper transition-colors items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange"></span>
          HOME
        </a>
      </div>
    </div>
  )
}
