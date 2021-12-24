import { useState, useEffect } from 'react'

const API_URL = "https://fakestoreapi.com/products";

const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchProducts = async () => {
    const response = await (await fetch(API_URL)).json()
    setProducts(response)
    !response && setError(true)
    setLoading(false)
  }

  useEffect(() => fetchProducts(), [])
  return { products, loading, error }
}

export default useGetProducts