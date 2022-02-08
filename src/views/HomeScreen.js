import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, images, SIZES } from '../constant';
import { Blink } from '../components';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
        <Image style={styles.imageStyle} resizeMode='center' source={images.eyes} />
        <View style={{flex:1}}>
          <Text style={styles.textHeader}>First step toward recovery is diagnosis</Text>
        </View>
      </View>
      <View style={{flex:1, justifyContent:'center'}}>
        <Blink>
          <TouchableOpacity
            onPress={() => navigation.navigate('Camera')}
            style={styles.buttonContainer}
          >
            <Text style={{color:COLORS.white}}>Get Start</Text>
          </TouchableOpacity>
        </Blink>
        <TouchableOpacity
          onPress={() => navigation.navigate('Result')}
          style={styles.buttonContainer}
        >
          <Text style={{color:COLORS.white}}>View result</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    imageStyle:{
      flex: 3,
      width: SIZES.width,
    },
    textHeader:{
      fontSize:SIZES.h1,
      fontWeight:'bold',
      textAlign:'center',
      marginHorizontal:10,
    },
    textParagraph:{
      fontSize:SIZES.body3,
      marginHorizontal:10,
    },  
    buttonContainer:{
      alignItems:'center',
      marginHorizontal:20,
      marginVertical:10,
      paddingVertical:10,
      borderRadius:5,
      backgroundColor: COLORS.lightBlue,
    }
})