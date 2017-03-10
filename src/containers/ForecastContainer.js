import React, { Component } from 'react'
import openWeatherHelpers from '../utils/openWeatherHelpers'
import Forecast from '../components/Forecast'

class ForcastContainer extends Component {
  constructor (props) {
    super(props)
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
      <Forecast
        forecastInfo={this.state.forecastInfo}
        isLoading={this.state.isLoading} />
    )
  }
}

export default ForcastContainer
