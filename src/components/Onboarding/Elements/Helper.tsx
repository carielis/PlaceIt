import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {styles} from '../styles';

export const Helper: React.FC = () => {
  const show = useSharedValue(1);
  const size = useSharedValue(50);
  const showHelp = useSharedValue(1);
  const sizeHelp = useSharedValue(50);
  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: show.value,
      width: size.value,
      height: size.value,
    }),
    [],
  );
  const helpAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: showHelp.value,
      width: sizeHelp.value + 20,
      height: sizeHelp.value + 20,
    }),
    [],
  );

  useEffect(() => {
    show.value = withRepeat(withTiming(0, {duration: 1300}), Infinity, false);
    size.value = withRepeat(withTiming(60, {duration: 1300}), Infinity, false);
    showHelp.value = withRepeat(
      withTiming(0, {duration: 1300}),
      Infinity,
      false,
    );
    sizeHelp.value = withRepeat(
      withTiming(60, {duration: 1300}),
      Infinity,
      false,
    );
  }, []);

  return (
    <View style={styles.helperContainer}>
      <Animated.View style={[styles.helpStyle, helpAnimatedStyle]}>
        <Animated.View style={[styles.helperStyle, animatedStyle]}>
          <Text style={{color: 'white'}}>Press</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};
