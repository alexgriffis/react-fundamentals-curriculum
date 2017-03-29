import React, { Component, PropTypes } from 'react'
import Snapshot from '../components/Snapshot'
import Detail from '../components/Detail'

class DetailContainer extends Component {
  state = {
    expanded: false
  };

  static propTypes = {
    time: PropTypes.object.isRequired,
    elm: PropTypes.object.isRequired
  }

  // refactor eventlistener into  parent?
  componentDidMount() {
    const scroller = document.getElementById('scroller')
    scroller.addEventListener('mousewheel', (e) => scroller.scrollLeft += e.deltaY / 5)
  }

  handleToggle = () => this.setState({ expanded: !this.state.expanded })

  render() {
    return this.state.expanded === true
      ? <Detail onToggle={this.handleToggle} {...this.props} />
      : <Snapshot onToggle={this.handleToggle} {...this.props} />
  }
}

export default DetailContainer
