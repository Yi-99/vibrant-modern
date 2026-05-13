import { useEasedNumber } from '../hooks/useEasedNumber'

const steps = [
  { n: "01", t: "Pick what matters", b: "5 habits, max. Stride is allergic to bloat." },
  { n: "02", t: "Tap to log", b: "One thumb. Two seconds. Confetti optional." },
  { n: "03", t: "Watch it fill", b: "The bar moves. So do you. Repeat 14×." },
]

export default function HowItWorks() {
  const value = useEasedNumber(100, { duration: 3600, delay: 200 })

  return (
    <section className="px-6 md:px-10 py-20 md:py-28 bg-paper border-t-2 border-ink">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-baseline justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display font-extrabold text-[clamp(40px,7vw,84px)]">
            Three taps.<br />
            <span className="text-orange">One </span>
            <span className="relative inline-block">
              <span className="relative z-10">addiction.</span>
              <span className="absolute left-0 right-0 bottom-[12%] h-[14%] bg-lime -z-0 -rotate-[1deg]"></span>
            </span>
          </h2>
          <div className="tag">03 — THE LOOP</div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[42px] h-3 bg-paper border-2 border-ink rounded-full overflow-hidden">
            <div className="h-full bg-orange" style={{ width: `${value}%`, transition: 'width 60ms linear' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="relative z-10 inline-flex items-center justify-center w-[88px] h-[88px] rounded-full bg-ink text-paper font-display font-extrabold text-3xl border-2 border-ink shadow-[4px_4px_0_#FF5A1F]">
                  {s.n}
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl mt-6">{s.t}</h3>
                <p className="text-ink/70 mt-2 max-w-xs">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
