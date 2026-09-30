import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Start each page at the top instead of keeping the previous page's scroll. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
