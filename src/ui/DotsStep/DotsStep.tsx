import React, {FC} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

interface Props {
  step: number;
}

export const DotsStep: FC<Props> = ({step}) => {
  return (
    <View style={styles.root}>
      <LinearGradient
        style={step === 1 ? styles.activeStep : styles.inActiveStep}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          step === 1
            ? [' rgb(83, 232, 139)', 'rgb(21, 190, 119)']
            : ['rgba(90, 108, 234, 0.07)']
        }
      />
      <LinearGradient
        style={step === 2 ? styles.activeStep : styles.inActiveStep}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          step === 2
            ? [' rgb(83, 232, 139)', 'rgb(21, 190, 119)']
            : ['rgba(66, 70, 105, 0.07)']
        }
      />
      {/* <LinearGradient
        style={styles.inActiveStep}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          step === 3
            ? [' rgb(83, 232, 139)', 'rgb(21, 190, 119)']
            : ['rgba(90, 108, 234, 0.07)']
        }
      /> */}
    </View>
  );
};
