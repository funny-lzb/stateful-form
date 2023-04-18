import { useEffect } from 'react'
import axios from 'axios'

export default function useFetchDataToJSON() {
  //   useEffect(fetchData, [])
  fetchData()
}

async function fetchData() {
  const res = await fetch('/api/file/d/1iT2750MGszpzi5mrCHCFmF8HYsCiHA0I/view')
  console.log(res)
  const data = await res.json()
  console.log(data)
}
