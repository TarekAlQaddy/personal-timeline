import React, { Component } from 'react';
import Event from './event/Event'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [
        { title: 'Joined College', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College2', description: 'aaaaaaaLorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' },
        { title: 'Joined College', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eius explicabo ipsam perferendis voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolorem eius explicabo ipsam perferendis voluptate?' }
      ],
      focusedEventIndex: null
    }
    this.pageDimmer = new React.createRef()
  }
  render() {
    let activeDimmer = this.state.focusedEventIndex !== null
    return (
      <div className={`app ${activeDimmer ? 'active-dimmer' : ''}`}>
        <div id="page-dimmer"
             ref={this.pageDimmer}
             className={activeDimmer ? 'active' : ''}
             onClick={this.deactivateDimmer}>
        </div>
        <div id="begin-pulp">
          <div className="ball b-1"></div>
          <div className="ball b-2"></div>
          <div className="ball b-3"></div>
        </div>
        <div id="main-column"></div>
        <div id="content">
          {
            this.state.events.map((event, i) =>
              <Event position={i % 2 === 0 ? 'left' : 'right'}
                     event={event}
                     index={i}
                     key={i}
                     isFocused={this.state.focusedEventIndex === i}
                     updateFocusedEvent={this.updateFocusedEvent} />)
          }
        </div>
      </div>
    );
  }

  updateFocusedEvent = (index) => {
    this.setState({
      focusedEventIndex: index
    })
  }

  deactivateDimmer = (event) => {
    this.setState({
      focusedEventIndex: null
    })
  }
}


export default App;
