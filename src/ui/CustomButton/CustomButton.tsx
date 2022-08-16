import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

interface Props extends TouchableOpacityProps {}

export const CustomButton: FC<Props> = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <LinearGradient
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[' rgb(83, 232, 139)', 'rgb(21, 190, 119)']}
      />
    </TouchableOpacity>
  );
};
