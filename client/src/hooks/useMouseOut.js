import { useEffect } from 'react'
import addGlobalEventListener from '../utils/addGlobalEventListener'

export default function useMouseOut() {
  useEffect(() => {
    addGlobalEventListener('mouseout', 'a', handleMouseOut)

    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [])

  function handleMouseOut(e) {
    e.target.classList.remove('dark')
  }
}
