import { useEasedNumber } from '../hooks/useEasedNumber'

const milestones = [
  { at: 12, label: "WAKE" },
  { at: 34, label: "RUN" },
  { at: 58, label: "LIFT" },
  { at: 80, label: "READ" },
]

const tasks = [
  { name: "Wake before 6", done: true },
  { name: "5K under 25:00", done: true },
  { name: "Squats — 4×8", done: true },
  { name: "Read 20 pages", done: true },
  { name: "Cold plunge", done: false },
]

export default function ProgressHero() {
  const TARGET = 87
  const value = useEasedNumber(TARGET, { duration: 5200, delay: 600 })
  const intVal = Math.round(value)

  return (
    <section className="relative px-6 md:px-10 pt-6 md:pt-10 pb-20">
      {/* Floating chips */}
      <div className="absolute top-2 right-10 md:right-20 z-10 hidden md:flex flex-col gap-3">
        <div className="floaty tag bg-lime/90">+1 streak day</div>
        <div className="floaty-2 tag bg-orange text-paper border-ink ml-6">PR: 5K @ 22:14</div>
      </div>
      <div className="absolute top-32 left-8 z-10 hidden lg:block">
        <div className="floaty-2 tag bg-paper">🔥 14 day flame</div>
      </div>

      {/* Big headline */}
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3 mb-6 rise-1">
          <span className="inline-flex items-center gap-2 tag">
            <span className="w-2 h-2 rounded-full bg-orange pulse-dot"></span>
            LIVE · TODAY'S GOAL
          </span>
          <span className="font-mono text-xs text-ink/60 tracking-wider">MON 12 MAY · 16:42</span>
        </div>

        <h1 className="font-display font-extrabold text-[clamp(64px,12vw,180px)] text-ink rise-2">
          BEAT YOUR
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">LAST SELF.</span>
            <span className="absolute left-0 right-0 bottom-[8%] h-[18%] bg-orange -z-0 -rotate-[1.2deg]"></span>
          </span>
        </h1>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 rise-3">
          <p className="max-w-xl text-lg md:text-xl text-ink/75 leading-snug">
            Stride is the goal tracker for people who'd rather hit
            <span className="font-semibold text-ink"> 87% </span>
            than scroll. Build streaks. Crush PRs. Watch the bar fill.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="btn-primary bg-orange text-paper px-7 py-4 rounded-full font-bold text-[16px] tracking-tight hover:bg-ink transition-colors flex items-center gap-2">
              GET STRIDE — FREE
              <span className="inline-block translate-y-[1px]">→</span>
            </a>
            <a href="#" className="px-7 py-4 rounded-full font-bold text-[16px] border-2 border-ink hover:bg-ink hover:text-paper transition-colors">
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* THE BAR */}
      <div className="max-w-[1280px] mx-auto mt-14 md:mt-20 rise-4">
        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-3">
            <span className="font-narrow font-extrabold text-[14px] tracking-[0.18em] uppercase">Today · daily quest</span>
            <span className="font-mono text-[12px] text-ink/50">04 / 05 tasks</span>
          </div>
          <div className="flex items-baseline gap-2 tabular">
            <span className="font-display font-extrabold text-[80px] md:text-[120px] leading-none text-ink">{intVal}</span>
            <span className="font-display font-extrabold text-[40px] md:text-[60px] leading-none text-orange">%</span>
          </div>
        </div>

        {/* The track */}
        <div className="relative">
          <div className="relative h-[88px] md:h-[112px] w-full bg-paper border-2 border-ink rounded-[28px] overflow-hidden shadow-[8px_8px_0_#0A0A0A] stripes">
            {/* fill */}
            <div
              className="absolute inset-y-0 left-0 bg-orange rounded-[26px] overflow-hidden shimmer"
              style={{ width: `${value}%`, transition: 'width 60ms linear' }}
            >
              <div className="absolute inset-x-3 top-3 h-[4px] bg-paper/40 rounded-full"></div>
              <div className="absolute right-0 top-0 bottom-0 w-[14px] bg-lime border-l-2 border-ink"></div>
            </div>

            {/* milestone markers */}
            {milestones.map((m) => (
              <div
                key={m.at}
                className="absolute top-0 bottom-0 flex flex-col items-center justify-between pointer-events-none"
                style={{ left: `${m.at}%`, transform: 'translateX(-50%)' }}
              >
                <div className={`w-[2px] h-full ${value >= m.at ? 'bg-ink/30' : 'bg-ink/20'}`}></div>
                <div className={`absolute -top-7 text-[10px] font-mono font-bold tracking-wider ${value >= m.at ? 'text-ink' : 'text-ink/40'}`}>
                  {m.label}
                </div>
                <div className={`absolute -bottom-7 w-3 h-3 rounded-full border-2 border-ink ${value >= m.at ? 'bg-lime' : 'bg-paper'}`}></div>
              </div>
            ))}

            {/* moving thumb (% bubble) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: `${value}%`, transform: `translate(-50%, -50%)`, transition: 'left 60ms linear' }}
            >
              <div className="relative">
                <div className="bg-ink text-paper font-mono font-bold text-[12px] tracking-wider px-3 py-1.5 rounded-md whitespace-nowrap tabular">
                  {String(intVal).padStart(2, '0')}%
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-ink rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Bottom rail: task chips */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {tasks.map((t, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-ink text-sm font-semibold transition-all duration-500 ${
                  t.done ? 'bg-lime' : 'bg-paper'
                }`}
                style={{ animation: `rise 0.7s ${0.8 + i * 0.12}s cubic-bezier(.2,.7,.2,1) both` }}
              >
                <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full border-2 border-ink ${t.done ? 'bg-ink' : 'bg-paper'}`}>
                  {t.done && <span className="text-lime text-[10px] leading-none">✓</span>}
                </span>
                <span className={t.done ? 'line-through decoration-[1.5px] text-ink/80' : 'text-ink'}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
