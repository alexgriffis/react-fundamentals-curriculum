import React, { Component, PropTypes } from 'react'
import SearchContainer from '../containers/SearchContainer'
import '../styles/header.css'

class Header extends Component {
  render () {
    return (
      <div id='head'>
        <h1>Clever Title that Reflects Location</h1>
        <SearchContainer />
      </div>
    )
  }
}

Header.propTypes = {

}

export default Header
