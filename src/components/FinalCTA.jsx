import { useEasedNumber } from '../hooks/useEasedNumber'

const plans = [
  { p: "FREE", t: "Solo", b: "5 habits, 1 bar, infinite vibes." },
  { p: "$6/mo", t: "Pro", b: "Unlimited bars + ghost mode.", hot: true },
  { p: "$0", t: "Student", b: ".edu = lifetime Pro. No catch." },
  { p: "$12/mo", t: "Crew", b: "Up to 8 friends. Public leaderboard." },
]

export default function FinalCTA() {
  const value = useEasedNumber(100, { duration: 4400, delay: 400 })
  const intVal = Math.round(value)

  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-ink text-paper border-t-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(250,250,247,0.35) 1px, transparent 0)',
        backgroundSize: '22px 22px',
      }}></div>

      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag !bg-transparent !border-paper text-paper">04 — YOU IN?</span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(56px,11vw,160px)] leading-[0.86]">
          ENOUGH<br />
          <span className="text-orange">SCROLLING.</span><br />
          <span className="italic font-normal text-paper/80">Start striding.</span>
        </h2>

        <div className="mt-10 md:mt-14">
          <div className="flex items-end justify-between mb-3">
            <span className="font-narrow font-extrabold text-[13px] tracking-[0.2em] uppercase text-paper/70">Onboarding · 90 seconds flat</span>
            <span className="font-display font-extrabold text-[40px] tabular">{intVal}%</span>
          </div>
          <div className="h-[64px] w-full bg-paper/10 border-2 border-paper rounded-[20px] overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-orange relative shimmer" style={{ width: `${value}%`, transition: 'width 60ms linear' }}>
              <div className="absolute right-0 inset-y-0 w-[10px] bg-lime"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-end px-5 pointer-events-none">
              <span className="font-display font-extrabold text-lg tracking-tight">GO →</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="#" className="btn-primary bg-orange text-paper px-8 py-5 rounded-full font-bold text-[18px] tracking-tight hover:bg-lime hover:text-ink transition-colors flex items-center gap-2">
            START FREE — NO CARD
            <span>→</span>
          </a>
          <div className="text-paper/60 text-[14px]">7-day flame trial · cancel from your couch.</div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-[20px] border-2 p-5 ${p.hot ? 'bg-lime text-ink border-lime' : 'bg-paper/[0.04] border-paper/30'}`}>
              {p.hot && <div className="absolute -top-3 left-5 bg-orange text-paper text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border-2 border-ink">MOST PICKED</div>}
              <div className={`font-mono text-[11px] tracking-[0.18em] uppercase ${p.hot ? 'text-ink/60' : 'text-paper/50'}`}>{p.t}</div>
              <div className="font-display font-extrabold text-4xl mt-1">{p.p}</div>
              <div className={`mt-2 text-[13px] ${p.hot ? 'text-ink/80' : 'text-paper/70'}`}>{p.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
