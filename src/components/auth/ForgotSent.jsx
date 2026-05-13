import { useState, useEffect } from 'react'

export default function ForgotSent({ go, email }) {
  const [secs, setSecs] = useState(30)
  useEffect(() => {
    if (secs <= 0) return
    const t = setTimeout(() => setSecs(secs - 1), 1000)
    return () => clearTimeout(t)
  }, [secs])

  return (
    <div className="slide-in">
      <div className="rise-1">
        <div className="tag mb-5 inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime"></span>
          INBOUND
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Check your inbox.</h2>
        <p className="text-ink/70 mt-3 text-[15px]">
          We sent a reset link to <span className="font-bold text-ink">{email || 'your email'}</span>.
        </p>
      </div>

      <div className="mt-7 rise-2 bg-paper border-2 border-ink rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between bg-ink text-paper px-4 py-2">
          <span className="font-mono text-[11px] tracking-wider uppercase">INBOX · 1 NEW</span>
          <span className="font-mono text-[11px] tabular">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-orange border-2 border-ink flex items-center justify-center font-display font-extrabold shrink-0">S</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[14px]">STRIDE</span>
              <span className="font-mono text-[10px] bg-lime px-1.5 py-0.5 rounded border border-ink">RESET</span>
            </div>
            <div className="font-display font-extrabold text-lg mt-0.5 truncate">Reset your password →</div>
            <div className="text-[12px] text-ink/60 truncate">Tap to set a new one. Expires in 15 min.</div>
          </div>
        </div>
        <button onClick={() => go('reset')} className="w-full bg-lime text-ink border-t-2 border-ink py-3 font-bold text-[13px] tracking-wider uppercase hover:bg-orange hover:text-paper transition-colors">
          OPEN RESET LINK (DEMO) →
        </button>
      </div>

      <div className="mt-6 rise-3 flex items-center justify-between">
        <button onClick={() => go('forgot')} className="font-mono text-[12px] tracking-wider uppercase hover:text-orange transition-colors flex items-center gap-1.5">
          <span>←</span> CHANGE EMAIL
        </button>
        <button
          onClick={() => setSecs(30)}
          disabled={secs > 0}
          className="font-mono text-[12px] tracking-wider uppercase disabled:text-ink/40 hover:text-orange transition-colors"
        >
          {secs > 0 ? `RESEND IN ${secs}s` : 'RESEND →'}
        </button>
      </div>

      <p className="text-center text-[12px] text-ink/50 mt-6 rise-4">
        No email? Check spam, or <a href="#" className="underline hover:text-orange">contact us</a>.
      </p>
    </div>
  )
}
