{
    "ClockSpeed": 1.0,
    "SettingsVersion": 1.2,
    "SimMode": "Car",
    "Vehicles": {
        "PhysXCar": {
            "Cameras": {
                "front_left_bumblebee": {
                    "CaptureSettings": [
                        {
                            "FOV_Degrees": 70,
                            "Height": 960,
                            "ImageType": 0,
                            "PublishToRos": 1,
                            "TargetGamma": 1.5,
                            "Width": 1280
                        }
                    ],
                    "Pitch": 0.0,
                    "Roll": 0.0,
                    "X": -0.12,
                    "Y": 2.0,
                    "Yaw": 0.0,
                    "Z": -0.8
                },
                "front_middle_bumblebee": {
                    "CaptureSettings": [
                        {
                            "DepthOfFieldFocalDistance": 200.0,
                            "DepthOfFieldFocalRegion": 200.0,
                            "DepthOfFieldFstop": 3.8,
                            "FOV_Degrees": 75,
                            "Height": 960,
                            "ImageType": 1,
                            "PublishToRos": 1,
                            "TargetGamma": 1.5,
                            "Width": 1280
                        }
                    ],
                    "Pitch": 0,
                    "Roll": 0,
                    "X": 0,
                    "Y": 2.0,
                    "Yaw": 0,
                    "Z": -0.8
                },
                "front_right_bumblebee": {
                    "CaptureSettings": [
                        {
                            "FOV_Degrees": 70,
                            "Height": 960,
                            "ImageType": 0,
                            "PublishToRos": 1,
                            "TargetGamma": 1.5,
                            "Width": 1280
                        }
                    ],
                    "Pitch": 0.0,
                    "Roll": 0.0,
                    "X": 0.12,
                    "Y": 2.0,
                    "Yaw": 0.0,
                    "Z": -0.8
                }
            },
            "EnableCollisionPassthrogh": true,
            "EnableCollisions": false,
            "Sensors": {
                "Imu": {
                    "Enabled": true,
                    "SensorType": 2
                },
                "VLP16_1": {
                    "DataFrame": "SensorLocalFrame",
                    "DrawDebugPoints": false,
                    "Enabled": true,
                    "NumberOfChannels": 16,
                    "Pitch": 0.0,
                    "PointsPerSecond": 30000,
                    "Range": 100,
                    "Roll": 0,
                    "RotationsPerSecond": 10,
                    "SensorType": 6,
                    "VerticalFOVLower": -15,
                    "VerticalFOVUpper": 15,
                    "X": 0,
                    "Y": 0,
                    "Yaw": 0,
                    "Z": -0.8
                }
            },
            "VehicleType": "PhysXCar"
        }
    },
    "ViewMode": "SpringArmChase"
}
