import { useState, useMemo } from 'react'
import Field from './Field'
import BigButton from './BigButton'
import Stepper from './Stepper'

export default function SignUpAccount({ go, state, set }) {
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  const strength = useMemo(() => {
    const p = state.password || ''
    let s = 0
    if (p.length >= 8) s++
    if (/[A-Z]/.test(p)) s++
    if (/[0-9]/.test(p)) s++
    if (/[^a-zA-Z0-9]/.test(p)) s++
    return s
  }, [state.password])

  const next = (e) => {
    e?.preventDefault?.()
    const errs = {}
    if (!state.email.match(/.+@.+\..+/)) errs.email = 'Need a real email.'
    if ((state.password || '').length < 8) errs.password = '8+ characters, champ.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    go('signup-profile')
  }

  const strengthLabels = ['weak', 'ok', 'strong', 'savage', 'elite']
  const strengthColors = ['bg-ink/10', 'bg-orange/30', 'bg-orange', 'bg-lime', 'bg-lime']

  return (
    <form onSubmit={next} className="slide-in">
      <Stepper steps={['Account', 'Profile', 'Goals']} current={0} />

      <div className="rise-1">
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">
          Start your{' '}
          <span className="relative inline-block">
            <span className="relative z-10">streak.</span>
            <span className="absolute left-0 right-0 bottom-[8%] h-[18%] bg-lime -z-0 -rotate-[1.2deg]"></span>
          </span>
        </h2>
        <p className="text-ink/70 mt-3 text-[15px]">Day 1 of 14. Let's go.</p>
      </div>

      <div className="space-y-3 mt-7 rise-2">
        <Field label="Email" type="email" value={state.email} onChange={(v) => set({ email: v })} error={errors.email} autoFocus name="email" />
        <Field
          label="Password"
          type={showPw ? 'text' : 'password'}
          value={state.password}
          onChange={(v) => set({ password: v })}
          error={errors.password}
          hint={`${strength}/4 · ${strengthLabels[Math.min(strength, 4)]}`}
          name="password"
          rightSlot={
            <button type="button" onClick={() => setShowPw(!showPw)} className="ml-2 font-mono text-[11px] tracking-wider uppercase text-ink/60 hover:text-orange transition-colors">
              {showPw ? 'HIDE' : 'SHOW'}
            </button>
          }
        />
        <div className="grid grid-cols-4 gap-1.5 pt-1">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 rounded-full border border-ink/20 ${i < strength ? strengthColors[strength] : 'bg-ink/5'}`}></div>
          ))}
        </div>
      </div>

      <div className="mt-6 rise-3">
        <BigButton type="submit" onClick={next}>CONTINUE</BigButton>
      </div>

      <p className="text-center text-[12px] text-ink/50 mt-4 rise-4 leading-snug">
        By striding, you agree to our <a href="#" className="underline hover:text-orange">Terms</a> and <a href="#" className="underline hover:text-orange">Privacy</a>.<br />
        We will never DM you on Sunday.
      </p>

      <p className="text-center text-[14px] mt-5 rise-5">
        Already running?{' '}
        <button type="button" onClick={() => go('signin')} className="font-bold underline decoration-2 underline-offset-4 decoration-orange hover:text-orange transition-colors">
          Sign in →
        </button>
      </p>
    </form>
  )
}
