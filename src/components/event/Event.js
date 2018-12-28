import React, { Component } from 'react'
import './Event.css'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardStyle: {}
    }
    this.eventRef = new React.createRef()
  }
  render () {
    let focused = this.props.isFocused ? 'focused' : ''
    let position = this.props.position
    let cardStyle = this.state.cardStyle
    console.log(cardStyle)
    return (
      <div className={`event ${position} ${focused}`} ref={this.eventRef}>
        <div className="event-card" onClick={this.emitFocusEvent} style={cardStyle}>
          <div className="event-point"></div>
          <div className="title">Joined College</div>
          <div className="break"></div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem eius explicabo ipsam perferendis voluptate?
          </div>
        </div>
      </div>
    )
  }

  emitFocusEvent = () => {
    this.props.updateFocusedEvent(this.props.index)
  }

  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    // console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('Component WILL UPDATE!');
    if (nextProps.isFocused && !this.props.isFocused) {
      let pageOffset = window.pageYOffset
      let viewPortHeight = window.innerHeight
      let eventOffset = this.eventRef.current.offsetTop
      let translateY = -(eventOffset - pageOffset - (viewPortHeight * 0.15))
      this.setState({
        cardStyle: {
          transform: `translateX(0) translateY(${translateY}px)`,
          width: '70%',
          'z-index': 3
        }
      })
    } else if (!nextProps.isFocused && this.props.isFocused) {
      this.setState({
        cardStyle: {}
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

}

export default Event
