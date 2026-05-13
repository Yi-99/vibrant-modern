export default function Stepper({ steps, current }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {steps.map((s, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={i} className="contents">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 border-2 ${active ? 'bg-ink text-paper border-ink' : done ? 'bg-lime border-ink text-ink' : 'bg-paper border-ink/30 text-ink/50'}`}>
              <span className="font-mono text-[11px] font-bold tabular">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-[11px] uppercase tracking-wider font-bold">{s}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-[2px] ${done ? 'bg-lime' : 'bg-ink/20'}`}></div>}
          </div>
        )
      })}
    </div>
  )
}
