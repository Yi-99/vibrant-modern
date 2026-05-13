import { useState } from 'react'
import Field from './Field'
import BigButton from './BigButton'

export default function ResetScreen({ go }) {
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)

  const checks = [
    { ok: pw.length >= 8, label: 'At least 8 characters' },
    { ok: /[A-Z]/.test(pw), label: 'One uppercase' },
    { ok: /[0-9]/.test(pw), label: 'One number' },
    { ok: /[^a-zA-Z0-9]/.test(pw), label: 'One symbol (optional, but spicy)' },
  ]

  const submit = (e) => {
    e?.preventDefault?.()
    const errs = {}
    if (pw.length < 8) errs.pw = '8+ chars.'
    if (pw !== pw2) errs.pw2 = "Doesn't match. Try again."
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => { setLoading(false); go('reset-done') }, 1200)
  }

  return (
    <form onSubmit={submit} className="slide-in">
      <div className="rise-1">
        <div className="tag mb-5 inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange pulse-dot"></span>
          NEW PASSWORD
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Make it weird.</h2>
        <p className="text-ink/70 mt-3 text-[15px]">Long is good. Weird is better.</p>
      </div>

      <div className="space-y-3 mt-7 rise-2">
        <Field
          label="New password"
          type={showPw ? 'text' : 'password'}
          value={pw}
          onChange={setPw}
          error={errors.pw}
          autoFocus
          rightSlot={
            <button type="button" onClick={() => setShowPw(!showPw)} className="ml-2 font-mono text-[11px] tracking-wider uppercase text-ink/60 hover:text-orange transition-colors">
              {showPw ? 'HIDE' : 'SHOW'}
            </button>
          }
        />
        <Field label="Confirm" type={showPw ? 'text' : 'password'} value={pw2} onChange={setPw2} error={errors.pw2} />
      </div>

      <ul className="mt-5 space-y-1.5 rise-3">
        {checks.map((c, i) => (
          <li key={i} className="flex items-center gap-2 text-[13px]">
            <span className={`w-4 h-4 rounded-full border-2 border-ink flex items-center justify-center transition-colors ${c.ok ? 'bg-lime' : 'bg-paper'}`}>
              {c.ok && <span className="text-ink text-[10px] leading-none">✓</span>}
            </span>
            <span className={c.ok ? 'text-ink font-semibold' : 'text-ink/50'}>{c.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rise-4">
        <BigButton type="submit" onClick={submit} loading={loading}>SET PASSWORD</BigButton>
      </div>
    </form>
  )
}
