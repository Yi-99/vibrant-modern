const items = [
  "NEW · STRIDE 4.0 IS LIVE",
  "★",
  "TRACK WHAT MATTERS",
  "★",
  "BUILT FOR THE CHRONICALLY MOTIVATED",
  "★",
  "1,200,000+ GOALS CRUSHED THIS WEEK",
  "★",
  "FREE FOR STUDENTS",
  "★",
]

export default function MarqueeBar() {
  const row = (
    <div className="flex items-center gap-10 px-5 shrink-0">
      {items.map((t, i) => (
        <span key={i} className="font-narrow font-bold text-[13px] tracking-[0.18em] uppercase whitespace-nowrap">
          {t}
        </span>
      ))}
    </div>
  )

  return (
    <div className="w-full bg-ink text-paper py-3 overflow-hidden border-b-2 border-ink">
      <div className="flex marquee-track" style={{ width: "200%" }}>
        {row}{row}
      </div>
    </div>
  )
}
