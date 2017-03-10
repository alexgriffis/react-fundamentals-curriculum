import React from 'react'
import SearchContainer from '../containers/SearchContainer'
import '../styles/header.css'

const Header = () => {
  return (
    <div id='head'>
      <h1>This Is The Weather App</h1>
      <SearchContainer />
    </div>
  )
}

export default Header
