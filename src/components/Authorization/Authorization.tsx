import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {CustomText} from '../../ui';
import {navOptions} from './navigationOption';
import {styles} from './styles';

export const Authorization: FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(navOptions);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View>
        <CustomText customStyle={styles.title} text="PlaceIt" />
      </View>
    </View>
  );
};
