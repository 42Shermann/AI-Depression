import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Camera } from 'expo-camera'
import * as Sharing from 'expo-sharing'
import { IconButton } from 'react-native-paper'
import { LoadingModal } from '../components'
import { SIZES, COLORS } from '../constant'

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [isRecording, setRecording] = useState(false)
  const [isFlash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync()
      if (cameraPermission.status === "granted" && microphonePermission.status === "granted" ) {
        setHasPermission('granted');
      } 
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
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
    const recordedVideo = await this.camera.recordAsync({ maxDuration:5, mute:true })
    console.log(recordedVideo)
    setModalVisible(true)
    await Sharing.shareAsync(recordedVideo.uri)
    setRecording(false)
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <Camera style={styles.camera} flashMode={isFlash} ref={ref => {this.camera = ref;}}/>
        <View style={{flex:1, justifyContent:'center'}}>
          {!isRecording 
          ?
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              handleRecord()
            }}>
            <IconButton
            icon="video-box"
            color={COLORS.white}
            size={36}
            />
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={{...styles.buttonContainer, backgroundColor:COLORS.lightRed}}
            >
              <IconButton
              icon="video-box"
              color={COLORS.white}
              size={36}
              />
          </TouchableOpacity>
          }
        </View>
        <LoadingModal modalVisible={modalVisible} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  camera: {
    height: SIZES.width * 1.33,
    width: '100%'
  },
  buttonContainer:{
    alignItems:'center',
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:5,
    backgroundColor: COLORS.lightBlue,
  },
  text: {
    fontSize: 18,
    color: COLORS.white
  },
});
