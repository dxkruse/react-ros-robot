import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Config from '../scripts/config';
import Teleoperation from './Teleoperation';

class Connection extends Component {
  state = { connected: false, ros: null };

  constructor() {
    super()
    this.init_connection();
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    this.state.ros.on("connection", () => {
      console.log("connection established!");
      this.setState({ connected: true });
    });

    this.state.ros.on("close", () => {
      console.log("connection closed!");
      this.setState({ connected: false });
      //try to reconnect every 5 seconds
      setTimeout(() => {
        try {
          this.state.ros.connect(
            "ws://" +
            Config.ROSBRIDGE_SERVER_IP +
            ":" + 
            Config.ROSBRIDGE_SERVER_PORT + 
            ""
          );
        } catch (error) {
          console.log("connection problem")
        }
      }, Config.RECONNECTION_TIMER);
    });

    try {
      this.state.ros.connect(
        "ws://" +
        Config.ROSBRIDGE_SERVER_IP +
        ":" + 
        Config.ROSBRIDGE_SERVER_PORT + 
        ""
      );
    } catch (error) {
      console.log("connection problem")
    }

  }

  render() { 
    return (
      <Alert className="text-center m-3"
      variant={this.state.connected? "success": "danger"}>
        {this.state.connected? "Robot Connected": "Robot Disconnected"}
      </Alert>
    );
  }
}
 
export default Connection;