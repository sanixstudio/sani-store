import { createContext, useState, useReducer } from "react"

export const Context = createContext()

function ContextProvider({ children }) {
  // const [state, dispatch] = useReducer(initialState)

  const [wishList, setWishList] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToWishList = (product) => {
    const wishListCopy = [...wishList]
    const exists = wishListCopy.find(p => p.id === product.id)
    if (!exists) setWishList((prevState) => [...prevState, product])
    else {
      const filtered = wishListCopy.filter(p => p.id !== product.id)
      setWishList(filtered)
    }
  }

  const addToCart = (product, check = false) => {
    const exists = cart.find(p => p.id === product.id)
    !exists ? setCart((prevState) => [...prevState, product]) : check = true;
  }

  const resetCart = () => {
    setCart([])
  }

  return (
    <Context.Provider value={{
      wishList,
      cart,
      addToWishList,
      addToCart,
      resetCart,
      total
    }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider