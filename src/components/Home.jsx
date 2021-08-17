import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
 
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Home Page Content under development, Click through the navigation bar to explore my projects'
    };
    ArrowKeysReact.config({
      left: () => {
        this.setState({
          content: 'left key detected.'
        });
      },
      right: () => {
        this.setState({
          content: 'right key detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.'
        });
      }
    });
  }

  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1">
        {this.state.content}
      </div>
    );
  }
}

export default Home;