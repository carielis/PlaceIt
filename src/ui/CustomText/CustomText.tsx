import React, {FC, memo} from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './styles';

interface Props {
  text: string;
  type?: string;
  customStyle?: TextProps['style'];
}

const CustomTextUI: FC<Props> = ({text, type, customStyle}) => {
  if (type === 'title') {
    return <Text style={[styles[type], customStyle]}>{text || ''}</Text>;
  }
  if (type === 'text') {
    return <Text style={[styles[type], customStyle]}>{text || ''}</Text>;
  }
  return <Text style={styles.default}>{text || ''}</Text>;
};

export const CustomText = memo(CustomTextUI);
