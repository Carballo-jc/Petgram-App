import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window
      .fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])
  return { categories }
}
