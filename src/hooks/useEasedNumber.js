import { useState, useEffect } from 'react'

export function useEasedNumber(target, { duration = 4200, delay = 250, easing = (t) => 1 - Math.pow(1 - t, 3) } = {}) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    let raf, start
    const tick = (ts) => {
      if (!start) start = ts
      const elapsed = ts - start - delay
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return }
      const t = Math.min(1, elapsed / duration)
      setVal(target * easing(t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, delay])

  return val
}
