import { useState } from 'react'
import BigButton from './BigButton'
import Stepper from './Stepper'

const GOAL_OPTIONS = [
  { id: 'move',  label: 'Move daily',     sub: 'Walk, run, ride.',      icon: '→' },
  { id: 'lift',  label: 'Lift heavy',     sub: '3× a week, min.',      icon: '▲' },
  { id: 'mind',  label: 'Read 20 pgs',    sub: 'Daily, before bed.',    icon: '✦' },
  { id: 'sleep', label: 'Sleep 7h+',      sub: 'Lights out by 23:00.',  icon: '◐' },
  { id: 'water', label: 'Hydrate · 2L',   sub: 'Track every glass.',    icon: '◇' },
  { id: 'build', label: 'Ship something', sub: 'Daily commit.',         icon: '■' },
]

export default function SignUpGoals({ go, state, set }) {
  const [loading, setLoading] = useState(false)

  const toggle = (id) => {
    const sel = new Set(state.goals || [])
    if (sel.has(id)) sel.delete(id)
    else if (sel.size < 5) sel.add(id)
    set({ goals: [...sel] })
  }

  const submit = (e) => {
    e?.preventDefault?.()
    setLoading(true)
    setTimeout(() => { setLoading(false); go('done') }, 1500)
  }

  const count = (state.goals || []).length

  return (
    <form onSubmit={submit} className="slide-in">
      <Stepper steps={['Account', 'Profile', 'Goals']} current={2} />

      <div className="rise-1">
        <h2 className="font-display font-extrabold text-5xl md:text-6xl">Pick 5. Max.</h2>
        <p className="text-ink/70 mt-3 text-[15px]">
          Stride is allergic to bloat.{' '}
          <span className="font-mono text-[12px] tabular bg-lime px-1.5 py-0.5 rounded border border-ink ml-1">{count}/5</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mt-6 rise-2">
        {GOAL_OPTIONS.map((g) => {
          const selected = (state.goals || []).includes(g.id)
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => toggle(g.id)}
              className={`text-left rounded-2xl border-2 border-ink p-3.5 transition-all ${selected ? 'bg-orange text-paper' : 'bg-paper hover:bg-lime/60'}`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className={`font-mono font-bold text-lg ${selected ? 'text-paper' : 'text-ink'}`}>{g.icon}</span>
                <span className={`w-5 h-5 rounded-full border-2 border-ink flex items-center justify-center shrink-0 ${selected ? 'bg-lime' : 'bg-paper'}`}>
                  {selected && <span className="text-ink text-[12px] leading-none">✓</span>}
                </span>
              </div>
              <div className="font-display font-extrabold text-xl mt-2 leading-tight">{g.label}</div>
              <div className={`text-[12px] mt-0.5 ${selected ? 'text-paper/80' : 'text-ink/60'}`}>{g.sub}</div>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6 rise-3">
        <button type="button" onClick={() => go('signup-profile')} className="bg-paper border-2 border-ink rounded-2xl py-4 font-bold text-[15px] hover:bg-ink hover:text-paper transition-colors flex items-center justify-center gap-2">
          <span>←</span> BACK
        </button>
        <BigButton type="submit" onClick={submit} loading={loading} disabled={count === 0}>
          LET'S GO
        </BigButton>
      </div>
    </form>
  )
}
