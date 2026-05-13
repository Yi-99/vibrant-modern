const stats = [
  { k: "1.2M", v: "goals crushed weekly" },
  { k: "87%", v: "average completion" },
  { k: "14d", v: "median streak" },
  { k: "4.9", v: "★ on the App Store" },
]

export default function StatStrip() {
  return (
    <section className="bg-ink text-paper py-10 md:py-14 border-y-2 border-ink">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col">
            <div className="font-display font-extrabold text-[64px] md:text-[88px] leading-none tracking-tighter">
              <span className={i % 2 ? "text-lime" : "text-orange"}>{s.k}</span>
            </div>
            <div className="mt-2 font-narrow font-bold text-[12px] tracking-[0.18em] uppercase text-paper/70">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
