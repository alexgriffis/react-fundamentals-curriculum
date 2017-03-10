import React, { Component, PropTypes } from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      location: ''
    }
    this.router = context.router
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
    this.router.push('/forecast/' + location)
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

SearchContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default SearchContainer
