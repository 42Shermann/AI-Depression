import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Sharing from 'expo-sharing';
import viewSize from '../constant';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [isRecording, setRecording] = useState(false)
  const [isFlash, setFlash] = useState(Camera.Constants.FlashMode.off)

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync()
      if (cameraPermission.status === "granted" && microphonePermission.status === "granted" ) {
        setHasPermission('granted');
      } 
    })();
  }, []);

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleRecord = async () => {
    setRecording(true)
    setTimeout(
      () => {
        setFlash(Camera.Constants.FlashMode.torch)
      }, 3000
    )
    setTimeout(
      () => {
        setFlash(Camera.Constants.FlashMode.off)
      }, 3500
    )
    const recordedVideo = await this.camera.recordAsync({maxDuration:5, mute:true})
    console.log(recordedVideo)
    Sharing.shareAsync(recordedVideo.uri)
    setRecording(false)
  }

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Camera style={styles.camera} flashMode={isFlash} ref={ref => {this.camera = ref;}}/>
        <View style={styles.buttonContainer}>
          {!isRecording 
          ?
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleRecord()
            }}>
            <Text style={styles.text}> Record </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.text}> Recording </Text>
          </TouchableOpacity>
          }
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    height: viewSize.windowWidth * 1.33,
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
