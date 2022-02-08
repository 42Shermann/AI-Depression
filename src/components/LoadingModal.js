import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import React from 'react';
import { COLORS } from '../constant';

const LoadingModal = ({ modalVisible }) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            console.log('Request Close')
        }}
    >
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.black,
        opacity: 0.50,
        alignItems: "center",
        justifyContent:'center',
      },
});
