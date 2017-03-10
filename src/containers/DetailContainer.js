import React, { Component, PropTypes } from 'react'
import Snapshot from '../components/Snapshot'
import Detail from '../components/Detail'

class DetailContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const scroller = document.getElementById('scroller')
    scroller.addEventListener('mousewheel', (e) => scroller.scrollLeft += e.deltaY / 5)
  }

  handleClick () {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return this.state.expanded === true
      ? <Detail onToggle={this.handleClick} time={this.props.time} elm={this.props.elm} />
      : <Snapshot onToggle={this.handleClick} time={this.props.time} elm={this.props.elm} />
  }
}

DetailContainer.propTypes = {
  time: PropTypes.object.isRequired,
  elm: PropTypes.object.isRequired
}

export default DetailContainer
