import axios from 'axios'
import moment from 'moment'
// Add openWeather api key
const id = 'e709e779bd37e4d570d719da142459c4'

const getForecastData = location => axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${id}`)

function getForecast (location) {
  return getForecastData(location)
    .then(result => {
      return result.data.list.map((elm) => {
        const max = Math.round((9 / 5 * (elm.main.temp_max - 273.15) + 32)) + '°F'
        const min = Math.round((9 / 5 * (elm.main.temp_min - 273.15) + 32)) + '°F'
        return {
          time: moment(elm.dt_txt),
          weather: elm.weather[0].main,
          max,
          min,
          ico: elm.weather[0].icon,
          hum: elm.main.humidity
        }
      })
    })
    .catch((err) => console.warn(`Error in getForecastData: ${err}`))
}

const helpers = {
  getForecast
}

export default helpers
