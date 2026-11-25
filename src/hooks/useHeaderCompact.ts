import { useEffect, useState } from 'react'

export function useHeaderCompact(threshold = 24) {
  const [compact, setCompact] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return compact
}
