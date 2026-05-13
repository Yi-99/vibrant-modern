export default function SocialRow({ onSocial }) {
  const opts = [
    { id: 'google', label: 'Google', icon: 'G' },
    { id: 'apple', label: 'Apple', icon: '' },
    { id: 'strava', label: 'Strava', icon: 'S' },
  ]
  return (
    <div className="grid grid-cols-3 gap-2">
      {opts.map((o) => (
        <button
          key={o.id}
          onClick={() => onSocial(o.id)}
          className="bg-paper border-2 border-ink rounded-2xl py-3 font-bold text-sm hover:bg-ink hover:text-paper transition-colors flex items-center justify-center gap-1.5"
        >
          <span className="font-mono text-base">{o.icon}</span>
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  )
}
