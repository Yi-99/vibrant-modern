import { useState, useEffect } from 'react'
import useEasedNumber from './useEasedNumber'

const COPY = {
  signin: { tag: 'WELCOME BACK', h: "Your streak\nis waiting.", sub: "14 day flame. Don't break it." },
  signup: { tag: 'NEW IN TOWN?', h: "Build a habit.\nKill a vibe.", sub: "Five habits, one bar, infinite vibes." },
  forgot: { tag: 'STUFF HAPPENS', h: "Lost it?\nWe'll send it.", sub: "Reset link in 30 seconds. No drama." },
  sent:   { tag: 'INBOUND', h: "Check your\ninbox.", sub: "Link expires in 15 min. Move fast." },
  reset:  { tag: 'NEW PASS', h: "Set it.\nForget it.", sub: "Make it long. Make it weird." },
  done:   { tag: 'LOCKED IN', h: "You're in.\nLet's run.", sub: "Today's bar is 87% full. Don't blink." },
}

export default function SidePanel({ mode }) {
  const [filled, setFilled] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setFilled(true), 400)
    return () => clearTimeout(t)
  }, [])
  const value = filled ? 74 : 0
  const intVal = useEasedNumber(filled ? 74 : 0, { duration: 2800, delay: 0 })
  const copy = COPY[mode] || { tag: 'STRIDE', h: "Beat your\nlast self.", sub: '' }

  return (
    <div className="relative h-full min-h-[640px] lg:min-h-[720px] bg-ink text-paper rounded-[28px] border-2 border-ink overflow-hidden p-7 md:p-9 flex flex-col">
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(250,250,247,0.5) 1px, transparent 0)',
        backgroundSize: '22px 22px',
      }}></div>

      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 items-end">
        <div className="floaty tag bg-lime text-ink !border-lime">+1 streak day</div>
        <div className="floaty-2 tag text-paper font-bold" style={{ background: '#FF5A1F', borderColor: '#FF5A1F' }}>PR · 5K @ 22:14</div>
      </div>

      <div className="relative z-10">
        <div className="tag !bg-transparent !border-paper/60 text-paper inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime pulse-dot"></span>
          {copy.tag}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h1 key={mode} className="font-display font-extrabold text-[clamp(48px,5.4vw,84px)] whitespace-pre-line slide-in">
          {copy.h.split('\n').map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span className="relative inline-block">
                  <span className="relative z-10">{line}</span>
                  <span className="absolute left-0 right-0 bottom-[8%] h-[18%] bg-orange -z-0 -rotate-[1.2deg]"></span>
                </span>
              ) : line}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-paper/75 text-lg max-w-md slide-in">{copy.sub}</p>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex items-end justify-between mb-2">
          <span className="font-narrow font-bold text-[12px] tracking-[0.18em] uppercase text-paper/70">Today's quest</span>
          <span className="font-display font-extrabold text-3xl tabular">{Math.round(intVal)}<span className="text-orange">%</span></span>
        </div>
        <div className="relative h-[44px] bg-paper/10 border-2 border-paper/40 rounded-2xl overflow-hidden stripes">
          <div className="absolute inset-y-0 left-0 bg-orange" style={{ width: `${value}%`, transition: 'width 2.8s cubic-bezier(.2,.7,.2,1)' }}>
            <div className="absolute inset-0 shimmer relative"></div>
            <div className="absolute right-0 inset-y-0 w-[8px] bg-lime"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {['WAKE', 'RUN', 'LIFT', 'READ', 'PLUNGE'].map((t, i) => (
            <span key={i} className={`font-mono text-[10px] tracking-wider px-2 py-1 rounded-full border ${i < 4 ? 'bg-lime/20 border-lime/40 text-lime' : 'border-paper/30 text-paper/40'}`}>
              {i < 4 && '✓ '}{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
