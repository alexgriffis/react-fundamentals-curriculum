import React, { Component, PropTypes } from 'react'
import '../styles/header.css'

class Header extends Component {
  render () {
    return (
      <div id='head'>
        <h1>Clever Title that Reflects Location</h1>
        <div>This is where the search box goes goes</div>
      </div>
    )
  }
}

Header.propTypes = {

}

export default Header
