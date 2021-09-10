import { createContext, useState, useReducer } from "react"

export const Context = createContext()

const initialState = [{ wishList: [], cart: [] }]

function ContextProvider({ children }) {
  // const [state, dispatch] = useReducer(initialState)
  const [wishList, setWishList] = useState(initialState[0].wishList)
  const [cart, setCart] = useState(initialState[0].cart)

  return (
    <Context.Provider value={{ wishList, setWishList, cart, setCart }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider