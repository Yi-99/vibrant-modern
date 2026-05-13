import { useState } from 'react'
import Field from './Field'
import BigButton from './BigButton'
import SocialRow from './SocialRow'
import Or from './Or'

export default function SignInScreen({ go, email, setEmail }) {
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e?.preventDefault?.()
    const errs = {}
    if (!email.match(/.+@.+\..+/)) errs.email = 'Looks off. Try again.'
    if (password.length < 6) errs.password = 'At least 6 chars.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => { setLoading(false); go('done') }, 1400)
  }

  return (
    <form onSubmit={submit} className="slide-in">
      <div className="rise-1">
        <div className="tag mb-5 inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime"></span>
          01 — SIGN IN
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Run it back.</h2>
        <p className="text-ink/70 mt-3 text-[15px]">Punch in. Pick up where you left off.</p>
      </div>

      <div className="space-y-3 mt-7 rise-2">
        <Field label="Email" type="email" value={email} onChange={setEmail} error={errors.email} autoFocus name="email" />
        <Field
          label="Password"
          type={showPw ? 'text' : 'password'}
          value={password}
          onChange={setPassword}
          error={errors.password}
          hint={<button type="button" onClick={() => go('forgot')} className="hover:text-orange transition-colors">Forgot?</button>}
          name="password"
          rightSlot={
            <button type="button" onClick={() => setShowPw(!showPw)} className="ml-2 font-mono text-[11px] tracking-wider uppercase text-ink/60 hover:text-orange transition-colors">
              {showPw ? 'HIDE' : 'SHOW'}
            </button>
          }
        />
      </div>

      <label className="flex items-center gap-2.5 mt-5 cursor-pointer rise-3">
        <span className={`w-5 h-5 rounded-md border-2 border-ink flex items-center justify-center transition-colors ${remember ? 'bg-ink' : 'bg-paper'}`}>
          {remember && <span className="text-lime text-[12px] leading-none">✓</span>}
        </span>
        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="hidden" />
        <span className="text-sm font-semibold">Keep me locked in for 30 days</span>
      </label>

      <div className="mt-6 rise-4">
        <BigButton type="submit" loading={loading} onClick={submit} icon="→">SIGN IN</BigButton>
      </div>

      <div className="rise-5">
        <Or />
        <SocialRow onSocial={() => { setLoading(true); setTimeout(() => { setLoading(false); go('done') }, 900) }} />
      </div>

      <p className="text-center text-[14px] mt-7 rise-5">
        New here?{' '}
        <button type="button" onClick={() => go('signup')} className="font-bold underline decoration-2 underline-offset-4 decoration-orange hover:text-orange transition-colors">
          Build your first streak →
        </button>
      </p>
    </form>
  )
}
