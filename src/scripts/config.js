const Config = {
    ROSBRIDGE_SERVER_IP: "136.33.204.229", //"192.168.86.129", 
    ROSBRIDGE_SERVER_PORT: "9090",
    PI_SERVER_IP: "",
    PI_SERVER_PORT: "",
    RECONNECTION_TIMER: 3000,
    CMD_VEL_TOPIC: "/cmd_vel",
    POSE_TOPIC: "/amcl_pose",
    POSE_MSG_TYPE: "geometry_msgs/PoseWithCovarianceStamped",
    ODOM_TOPIC: "/odom",
    ODOM_MSG_TYPE: "nav_msgs/Odometry",
    BASE_SERVO_TOPIC: "/base_servo",
    ARM_SERVO1_TOPIC: "/arm_servo1",
    ARM_SERVO2_TOPIC: "/arm_servo2",
    CLAW_SERVO_TOPIC: "/claw_servo",
    SERVO_MSG_TYPE: "std_msgs/UInt16",
};

export default Config;