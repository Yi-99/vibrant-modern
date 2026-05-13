import useEasedNumber from './useEasedNumber'
import BigButton from './BigButton'

export default function DoneScreen({ go, message = "You're in." }) {
  const value = useEasedNumber(100, { duration: 2200, delay: 200 })

  return (
    <div className="slide-in text-center">
      <div className="rise-1 inline-flex">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-lime border-2 border-ink flex items-center justify-center pop">
            <span className="font-display font-extrabold text-5xl">✓</span>
          </div>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-orange border border-ink"
              style={{
                top: '50%', left: '50%',
                transform: `rotate(${i * 60}deg) translateY(-72px)`,
                animation: `pop 0.6s ${0.3 + i * 0.05}s cubic-bezier(.2,.9,.3,1.4) both`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-7 rise-2">{message}</h2>
      <p className="text-ink/70 mt-3 text-[15px] rise-3">Today's bar is filling. Don't blink.</p>

      <div className="mt-7 rise-4">
        <div className="flex items-end justify-between mb-2">
          <span className="font-narrow font-bold text-[12px] tracking-[0.18em] uppercase">Onboarding</span>
          <span className="font-display font-extrabold text-2xl tabular">{Math.round(value)}%</span>
        </div>
        <div className="relative h-[40px] bg-paper border-2 border-ink rounded-2xl overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-orange shimmer relative" style={{ width: `${value}%`, transition: 'width 60ms linear' }}>
            <div className="absolute right-0 inset-y-0 w-[6px] bg-lime"></div>
          </div>
        </div>
      </div>

      <div className="mt-6 rise-5">
        <BigButton onClick={() => go('signin')} color="lime" icon="→">ENTER STRIDE</BigButton>
      </div>
    </div>
  )
}
