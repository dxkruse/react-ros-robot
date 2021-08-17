import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component';
import Config from '../scripts/config';


class ArmTeleoperation extends Component {

  //redefine ros state from Connection.jsx, 
  //Future work: Redux would allow for sharing of states between components.
  state = { 
    ros: null,
    base_servo_angle: 0,
    arm_servo1_angle: 0,
    arm_servo2_angle: 0,
    claw_servo_angle: 0,    
  }

  constructor() {
    super()
    this.init_connection();
    this.handleBaseMove = this.handleBaseMove.bind(this);
    // this.handleStop = this.handleStop.bind(this);
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    this.state.ros.on("connection", () => {
      console.log("connection established in Teleop!");
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

  componentDidMount() {
    this.getArmState();
  }

  getArmState() {
    //Creates a pose subscriber
    var base_servo_subscriber = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: Config.POSE_TOPIC,
      messageType: Config.POSE_MSG_TYPE
    });

    //Create a pose callback
    base_servo_subscriber.subscribe((message) => {
      this.setState({ base_servo_angle: message.data.toFixed(2) })
    });
  }
    
  handleBaseMove(event) {
    //create ROS publisher on topic cmd_vel
    var base_cmd = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "base_servo",
      messageType: "std_msgs/UInt16"
    });
    //create twist message to publish to rosbridge
    var base_twist = new window.ROSLIB.Message({ 
      data: this.state.base_servo_angle + 5,
    });
    //publish message on cmd_vel
    base_cmd.publish(base_twist);
  }

  // handleStop(event) {
  //   console.log("handle stop");
  //   //create ROS publisher on topic cmd_vel
  //   var cmd_vel = new window.ROSLIB.Topic({
  //     ros: this.state.ros,
  //     name: "base_servo",
  //     messageType: "std_msgs/UInt16"
  //   });
  //   //create twist message to publish to rosbridge
  //   var twist = new window.ROSLIB.Message({ 
  //     data: 0, 
  //   });
  //   //publish message on cmd_vel
  //   cmd_vel.publish(twist);
  // }

  render() { 
    return ( 
      <div>
        <Joystick
          size={100} 
          baseColor="#EEEEEE" 
          stickColor="#BBBBBB" 
          move={this.handleBaseMove}
          // stop={this.handleStop}
        ></Joystick>
        <p>{ this.state.base_servo_angle }</p>
      </div>
     );
  }
}
 
export default ArmTeleoperation;