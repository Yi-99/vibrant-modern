export default function Field({ label, type = 'text', value, onChange, error, autoFocus, hint, rightSlot, name }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70">{label}</span>
        {hint && <span className="font-mono text-[11px] text-ink/40">{hint}</span>}
      </div>
      <div className={`field flex items-center bg-paper border-2 rounded-2xl px-4 py-3 ${error ? 'border-orange shake' : 'border-ink'}`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoFocus={autoFocus}
          className="flex-1 bg-transparent outline-none text-[16px] font-semibold placeholder-ink/30"
          placeholder=" "
        />
        {rightSlot}
      </div>
      {error && (
        <div className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-orange">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange"></span>
          {error}
        </div>
      )}
    </label>
  )
}
