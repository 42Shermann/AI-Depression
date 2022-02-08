import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constant';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResultScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeader}>Result</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultHeader}>Norminal</Text>
        <Text>No symptom of depression detected</Text>
      </View>
      <View style={{flex:1, justifyContent:'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonContainer}
        >
          <Text style={{color:COLORS.white}}>Return</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    textHeader:{
        fontSize:SIZES.h1,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:10
    },
    paragraphStyle:{
      color: COLORS.white
    },
    resultHeader:{
        fontSize:SIZES.h2,
        fontWeight:'bold',
        color: COLORS.white
    },
    resultContainer:{
        height: SIZES.height / 2,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: COLORS.lightGreen,
        marginHorizontal: 25,
        borderRadius:20
    },
    buttonContainer:{
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:10,
        paddingVertical:10,
        borderRadius:5,
        backgroundColor: COLORS.lightBlue,
      }
});
