import { useEffect, useState } from 'react'

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function useCounter(target: number, duration = 800, isActive = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.floor(easeOut(progress) * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isActive, target, duration])

  return value
}
