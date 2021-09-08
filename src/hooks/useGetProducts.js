import { useState, useEffect } from 'react'

const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const API_URL = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    const response = await (await fetch(API_URL)).json()
    setProducts(response)
  }

  useEffect(() => fetchProducts(), [])
  return {products}
}

export default useGetProducts