import React from 'react'

import {CardButton} from './Styles'

const Button = ({children}) => {
  return (
    <CardButton>
      {children}
    </CardButton>
  )
}

export default Button
