import React, { PropTypes } from 'react'
import '../styles/search.css'

const Search = props => {
  return (
    <div>
      <form onSubmit={props.onSubmitLocation}>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={props.onUpdateLocation} value={props.location} placeholder='Enter A Location' />
        </div>
        <div className='form-group'>
          <button type='submit'>Continue</button>
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

export default Search
