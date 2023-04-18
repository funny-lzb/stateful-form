import { useEffect } from 'react'
import addGlobalEventListener from '../utils/addGlobalEventListener'

export default function useMouseOver() {
  useEffect(() => {
    addGlobalEventListener('mouseover', 'a', handleMouseOver)

    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  function handleMouseOver(e) {
    e.target.classList.add('dark')
  }
}
