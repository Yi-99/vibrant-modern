import { useEasedNumber } from '../hooks/useEasedNumber'

function FeatureCard({ tag, title, body, color = "bg-paper", className = "", children, ribbon }) {
  return (
    <div className={`relative rounded-[28px] border-2 border-ink p-6 md:p-7 ${color} ${className} lift shadow-[6px_6px_0_#0A0A0A]`}>
      {ribbon && (
        <div className="absolute -top-3 right-6 bg-orange text-paper text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border-2 border-ink">
          {ribbon}
        </div>
      )}
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/60 mb-3">{tag}</div>
      <h3 className="font-display font-extrabold text-3xl md:text-4xl text-ink">{title}</h3>
      {body && <p className="mt-3 text-ink/70 leading-snug">{body}</p>}
      <div className="mt-5">{children}</div>
    </div>
  )
}

function MiniBar({ pct, color = "bg-orange", label, sub }) {
  const v = useEasedNumber(pct, { duration: 3200, delay: 200 })
  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-[12px] font-mono">
        <span className="font-bold tracking-wider uppercase">{label}</span>
        <span className="tabular text-ink/60">{Math.round(v)}%</span>
      </div>
      <div className="h-3 w-full bg-paper border-2 border-ink rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${v}%`, transition: 'width 60ms linear' }}></div>
      </div>
      {sub && <div className="mt-2 text-[11px] text-ink/60">{sub}</div>}
    </div>
  )
}

function StreakHeatmap() {
  return (
    <div className="grid grid-cols-12 gap-[3px]">
      {Array.from({ length: 84 }).map((_, i) => {
        const seed = (i * 23 + 7) % 100
        const v = seed < 70 ? (seed % 4) : -1
        const colors = ["bg-paper border-ink/30", "bg-orange/30 border-orange", "bg-orange/70 border-orange", "bg-orange border-ink"]
        return (
          <div
            key={i}
            className={`aspect-square rounded-[3px] border ${v === -1 ? 'bg-paper border-ink/15' : colors[v]}`}
          ></div>
        )
      })}
    </div>
  )
}

function WeeklyRing() {
  const circumference = 2 * Math.PI * 42
  return (
    <div className="flex items-center gap-6">
      <div className="relative w-[180px] h-[180px] shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full spin-slow">
          <circle cx="60" cy="60" r="50" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeDasharray="2 6" opacity="0.4" />
        </svg>
        <svg viewBox="0 0 120 120" className="w-full h-full absolute inset-0 -rotate-90">
          <circle cx="60" cy="60" r="42" stroke="#0A0A0A" strokeWidth="14" fill="none" opacity="0.08" />
          <circle
            cx="60" cy="60" r="42"
            stroke="#FF5A1F" strokeWidth="14" fill="none" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - 0.74)}
            style={{ transition: 'stroke-dashoffset 2s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display font-extrabold text-5xl tabular">74<span className="text-orange">%</span></div>
          <div className="font-mono text-[10px] tracking-widest uppercase mt-1">week 19</div>
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 text-[13px] font-semibold"><span className="w-3 h-3 rounded-full bg-orange border-2 border-ink"></span>Move · 88%</div>
        <div className="flex items-center gap-2 text-[13px] font-semibold"><span className="w-3 h-3 rounded-full bg-ink border-2 border-ink"></span>Mind · 71%</div>
        <div className="flex items-center gap-2 text-[13px] font-semibold"><span className="w-3 h-3 rounded-full bg-paper border-2 border-ink"></span>Make · 63%</div>
        <div className="text-[12px] text-ink/70 mt-3 max-w-[200px] leading-snug">Closes Sunday 23:59. Skip one and it ain't closing.</div>
      </div>
    </div>
  )
}

function RaceLanes() {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center justify-between text-[12px] font-mono mb-2">
          <span className="font-bold tracking-wider uppercase text-paper">You · today</span>
          <span className="text-lime tabular">22:14</span>
        </div>
        <div className="relative h-7 bg-paper/10 border border-paper/30 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-lime rounded-full" style={{ width: '92%' }}></div>
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-ink">→</div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between text-[12px] font-mono mb-2">
          <span className="font-bold tracking-wider uppercase text-paper/70">Ghost · last PR</span>
          <span className="text-paper/70 tabular">23:01</span>
        </div>
        <div className="relative h-7 bg-paper/10 border border-paper/30 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-orange/60 rounded-full" style={{ width: '87%' }}></div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between text-[12px] font-mono mb-2">
          <span className="font-bold tracking-wider uppercase text-paper/70">Crew avg</span>
          <span className="text-paper/70 tabular">24:48</span>
        </div>
        <div className="relative h-7 bg-paper/10 border border-paper/30 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-paper/40 rounded-full" style={{ width: '74%' }}></div>
        </div>
      </div>
    </div>
  )
}

function NudgeCards() {
  const nudges = [
    { t: "07:02", b: "5 min from breaking your record." },
    { t: "13:18", b: "Your crew is 3 steps ahead." },
    { t: "21:45", b: "One more page = streak day +1." },
  ]
  return (
    <div className="space-y-3">
      {nudges.map((n, i) => (
        <div key={i} className="bg-paper text-ink rounded-2xl border-2 border-ink p-3 flex items-start gap-3">
          <span className="font-mono text-[10px] tracking-widest tabular shrink-0 mt-1">{n.t}</span>
          <span className="text-[13px] font-semibold leading-snug">{n.b}</span>
        </div>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <div className="tag inline-block mb-4">02 — THE TOOLKIT</div>
            <h2 className="font-display font-extrabold text-[clamp(40px,7vw,84px)]">
              Bars that <span className="italic font-normal">actually</span> move.
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/70">
            Five views of the same goal, because one number was never going to be enough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6">
          <FeatureCard
            tag="01 / Daily"
            title="Stack your day."
            body="Every habit, every PR, every page — in one editable rail."
            color="bg-paper"
            className="md:col-span-3"
          >
            <div className="space-y-4">
              <MiniBar pct={92} color="bg-orange" label="Move" sub="9,820 / 10,000 steps" />
              <MiniBar pct={68} color="bg-lime" label="Mind" sub="38m / 60m reading" />
              <MiniBar pct={45} color="bg-ink" label="Make" sub="2 / 5 tickets shipped" />
            </div>
          </FeatureCard>

          <FeatureCard
            tag="02 / Weekly"
            title="Close the ring."
            color="bg-lime"
            className="md:col-span-3"
            ribbon="NEW"
          >
            <WeeklyRing />
          </FeatureCard>

          <FeatureCard
            tag="03 / Streak"
            title="Don't break the chain."
            color="bg-paper"
            className="md:col-span-2"
          >
            <StreakHeatmap />
            <div className="flex items-center justify-between mt-4 text-[11px] font-mono uppercase tracking-wider">
              <span>12 weeks</span>
              <span className="text-orange font-bold">14 day flame 🔥</span>
            </div>
          </FeatureCard>

          <FeatureCard
            tag="04 / Race"
            title="Beat the ghost of you."
            color="bg-ink text-paper"
            className="md:col-span-4 !text-paper"
          >
            <RaceLanes />
            <div className="mt-6 inline-flex items-center gap-2 bg-lime text-ink rounded-full px-4 py-2 text-[12px] font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              NEW PR · -47s
            </div>
          </FeatureCard>

          <FeatureCard
            tag="05 / Nudges"
            title="Tiny pokes. Big swings."
            color="bg-orange text-paper"
            className="md:col-span-2 !text-paper"
          >
            <NudgeCards />
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
