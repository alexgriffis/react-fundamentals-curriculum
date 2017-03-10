import React, { PropTypes } from 'react'
import '../styles/snapshot-detail.css'

const Snapshot = props => {
  const elm = props.elm
  const time = props.time
  return (
    <div className='opaque flex-items round-padding clickable' onClick={props.onToggle}>
      <p className='nowrap'>{time.format('dddd MMMM Do')}</p>
      <img src={`http://openweathermap.org/img/w/${elm.ico}.png`} alt={elm.weather} />
      <p className='nowrap'>{time.format('h a')}: {elm.weather}</p>
    </div>
  )
}

Snapshot.propTypes = {
  time: PropTypes.object.isRequired,
  elm: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Snapshot
