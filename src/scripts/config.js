const Config = {
    ROSBRIDGE_SERVER_IP: "136.33.204.229", //"192.168.1.243", 136.33.204.229 172.17.0.4
    ROSBRIDGE_SERVER_PORT: "9090",
    RECONNECTION_TIMER: 3000,
    CMD_VEL_TOPIC: "/cmd_vel",
    POSE_TOPIC: "/amcl_pose",
    POSE_MSG_TYPE: "geometry_msgs/PoseWithCovarianceStamped",
    ODOM_TOPIC: "/odom",
    ODOM_MSG_TYPE: "nav_msgs/Odometry"

};

export default Config;