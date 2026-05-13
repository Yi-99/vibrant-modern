import { useState } from 'react'
import Field from './Field'
import BigButton from './BigButton'
import Stepper from './Stepper'

export default function SignUpProfile({ go, state, set }) {
  const [errors, setErrors] = useState({})

  const next = (e) => {
    e?.preventDefault?.()
    const errs = {}
    if (!state.name || state.name.length < 2) errs.name = 'Give us a real name.'
    if (!state.handle || state.handle.length < 3) errs.handle = '3+ chars, no spaces.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    go('signup-goals')
  }

  return (
    <form onSubmit={next} className="slide-in">
      <Stepper steps={['Account', 'Profile', 'Goals']} current={1} />

      <div className="rise-1">
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Who's striding?</h2>
        <p className="text-ink/70 mt-3 text-[15px]">Your name on the leaderboard.</p>
      </div>

      <div className="space-y-3 mt-7 rise-2">
        <Field label="Display name" value={state.name} onChange={(v) => set({ name: v })} error={errors.name} autoFocus name="name" />
        <Field
          label="Handle"
          value={state.handle}
          onChange={(v) => set({ handle: v.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase() })}
          error={errors.handle}
          hint="lowercase, no spaces"
          name="handle"
          rightSlot={<span className="font-mono text-sm text-ink/40 ml-2">@</span>}
        />
      </div>

      <div className="mt-5 rise-3">
        <div className="bg-paper border-2 border-ink rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orange border-2 border-ink flex items-center justify-center font-display font-extrabold text-xl">
            {(state.name || '?')[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display font-extrabold text-lg truncate">{state.name || 'Your name'}</div>
            <div className="font-mono text-[12px] text-ink/50 truncate">@{state.handle || 'handle'} · day 1</div>
          </div>
          <span className="tag !bg-lime !border-lime text-ink shrink-0">PREVIEW</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6 rise-4">
        <button type="button" onClick={() => go('signup')} className="bg-paper border-2 border-ink rounded-2xl py-4 font-bold text-[15px] hover:bg-ink hover:text-paper transition-colors flex items-center justify-center gap-2">
          <span>←</span> BACK
        </button>
        <BigButton type="submit" onClick={next}>CONTINUE</BigButton>
      </div>
    </form>
  )
}
