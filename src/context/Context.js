import { createContext, useState, useReducer } from "react"

export const Context = createContext()

const initialState = [{ wishList: [1, 3, 4, 6], cart: [3, 6] }]

function ContextProvider({ children }) {
  // const [state, dispatch] = useReducer(initialState)
  const [wishList, setWishList] = useState(initialState[0].wishList)
  const [cart, setCart] = useState(initialState[0].cart)

  return (
    <Context.Provider value={{ wishList, cart }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider


