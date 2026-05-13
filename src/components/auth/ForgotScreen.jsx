import { useState } from 'react'
import Field from './Field'
import BigButton from './BigButton'

export default function ForgotScreen({ go, email, setEmail }) {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e?.preventDefault?.()
    if (!email.match(/.+@.+\..+/)) { setErrors({ email: 'Need a real email.' }); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => { setLoading(false); go('forgot-sent') }, 1300)
  }

  return (
    <form onSubmit={submit} className="slide-in">
      <div className="rise-1">
        <div className="tag mb-5 inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange pulse-dot"></span>
          03 — FORGOT PASSWORD
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Reset it.</h2>
        <p className="text-ink/70 mt-3 text-[15px]">Drop your email. We'll fire a link in 30 seconds.</p>
      </div>

      <div className="mt-7 rise-2">
        <Field label="Email" type="email" value={email} onChange={setEmail} error={errors.email} autoFocus name="email" />
      </div>

      <div className="mt-6 rise-3">
        <BigButton type="submit" onClick={submit} loading={loading}>SEND RESET LINK</BigButton>
      </div>

      <p className="text-center text-[14px] mt-5 rise-4">
        Remembered it?{' '}
        <button type="button" onClick={() => go('signin')} className="font-bold underline decoration-2 underline-offset-4 decoration-orange hover:text-orange transition-colors">
          Back to sign in →
        </button>
      </p>
    </form>
  )
}
