import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {StepOneIcon, StepTwoIcon} from '../../ui';
import {DotsStep} from '../../ui/DotsStep/DotsStep';
import {Helper} from './Elements/Helper';
import {Step} from './Elements/Step';
import {styles} from './styles';

interface Props {}

export const Onboarding: FC<Props> = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const value = useSharedValue(0);
  const width = Dimensions.get('screen').width * step;

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{translateX: value.value}],
    }),
    [],
  );

  return (
    <View style={styles.display}>
      <TouchableOpacity
        onPress={() => {
          if (step < 2) {
            value.value = withSpring(-width);
            setStep(prev => prev + 1);
          } else {
            navigation.navigate('authorization', {});
          }
        }}
        activeOpacity={1}>
        <Animated.View style={[styles.root, animatedStyle]}>
          <Step
            Icon={<StepOneIcon />}
            title="Находите интересные заведения рядом"
            text=""
          />
          <Step
            Icon={<StepTwoIcon />}
            title="Выбирайте рестораны по вашим предпочтениям и бюджету"
            text=""
          />
        </Animated.View>
        <View style={styles.buttonContainer}>
          <DotsStep step={step} />
          <Helper />
        </View>
        <View />
      </TouchableOpacity>
    </View>
  );
};
