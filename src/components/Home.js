import React from 'react'
import '../styles/home.css'
import SearchContainer from '../containers/SearchContainer'

const Home = () => {
  return (
    <div id='page'>
      <div className='opaque'>
        <h1> Enter A Location </h1>
        <SearchContainer />
      </div>
    </div>
  )
}

export default Home
