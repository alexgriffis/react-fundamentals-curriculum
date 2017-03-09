import React, { PropTypes } from 'react'
import Header from './Header.js'

const Main = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Main
