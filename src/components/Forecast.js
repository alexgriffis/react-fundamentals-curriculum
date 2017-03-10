import React, { PropTypes } from 'react'

const Forecast = props => {
  return (
    <div>{JSON.stringify(props.forecastInfo)}</div>
  )
}

Forecast.propTyeps = {
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.object.isRequired
}
export default Forecast
