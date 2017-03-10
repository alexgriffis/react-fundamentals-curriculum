import React, { PropTypes } from 'react'
import DetailContainer from '../containers/DetailContainer'
import '../styles/forecast.css'

const Forecast = props => {
  return (
    <div className='flex-row-scroll'>
      {props.forecastInfo.map(elm => {
        return (
          <DetailContainer time={elm.time} elm={elm} key={elm.time} />
        )
      })}
    </div>
  )
}

Forecast.propTyeps = {
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.object.isRequired
}
export default Forecast
