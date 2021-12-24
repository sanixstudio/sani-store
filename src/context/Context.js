import { createContext, useState, useReducer } from "react"

export const Context = createContext()

function ContextProvider({ children }) {
  // const [state, dispatch] = useReducer(initialState)

  const [wishList, setWishList] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToWishList = (product, check) => {
    const exists = wishList.find(p => p.id === product.id)
    !exists ? setWishList((prevState) => [...prevState, product]) : check = true;
    console.log(check)
  }

  const addToCart = (product, check = false) => {
    const exists = cart.find(p => p.id === product.id)
    !exists ? setCart((prevState) => [...prevState, product]) : check = true;
    console.log(check)
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