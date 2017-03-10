import React, { Component } from 'react'
import openWeatherHelpers from '../utils/openWeatherHelpers'
import Forecast from '../components/Forecast'

class ForcastContainer extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      forecastInfo: []
    }
  }
  componentDidMount () {
    const location = this.props.routeParams.location
    openWeatherHelpers.getForecast(location)
      .then((forcastDays) => {
        this.setState({
          isLoading: true,
          forecastInfo: forcastDays
        })
      })
  }
  render () {
    return (
      <div id='page'>
        <Forecast
          forecastInfo={this.state.forecastInfo}
          isLoading={this.state.isLoading} />
      </div>
    )
  }
}

export default ForcastContainer
