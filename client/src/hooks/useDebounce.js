import { useState, useEffect } from 'react'

//只留下最后一次的结果
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
