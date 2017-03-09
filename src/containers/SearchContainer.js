import React, { Component, PropTypes } from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  constructor (/* props */) {
    super()
    this.state = {
      location: ''
    }
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this)
  }

  handleUpdateLocation (e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSubmitLocation (e) {
    e.preventDefault()
    let location = this.state.location
    // this.setState({
    //   location: ''
    // })
    this.context.router.push('/forcast/' + location)
  }

  render () {
    return (
      <Search
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location} />
    )
  }
}

SearchContainer.propTypes = {

}

export default SearchContainer
