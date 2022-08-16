import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {CustomText} from '../../../ui';
import {styles} from '../styles';

interface Props {
  title: string;
  text: string;
  Icon: JSX.Element;
}

export const Step: FC<Props> = ({title, text, Icon}) => {
  const scaleSize = useSharedValue(1.1);

  useEffect(() => {
    scaleSize.value = withRepeat(withTiming(1, {duration: 600}), 1, false);
  }, [scaleSize]);
  const animatedStle = useAnimatedStyle(
    () => ({
      transform: [{scale: scaleSize.value}],
    }),
    [],
  );
  return (
    <View style={styles.stepRoot}>
      <Animated.View style={animatedStle}>{Icon}</Animated.View>
      <CustomText customStyle={styles.title} type="title" text={title} />
      <CustomText customStyle={styles.subTitle} type="text" text={text} />
    </View>
  );
};
