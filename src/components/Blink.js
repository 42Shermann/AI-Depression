import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
  } from 'react-native-reanimated';

const Blink = (props) => {
  const width = useSharedValue(50);
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  return (
    <View>
      <Animated.View style={[style]} />
        {props.children}
    </View>
  );
};

export default Blink;

