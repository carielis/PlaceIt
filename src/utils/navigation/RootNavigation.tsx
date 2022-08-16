import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Authorization, Onboarding} from '../../components';
import {SafeAreaView, StatusBar} from 'react-native';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="red"
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen
            name="authorization"
            component={Authorization}
            options={{
              transitionSpec: {
                open: {
                  animation: 'spring',
                  config: {
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                },
                close: {
                  animation: 'timing',
                  config: {
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                },
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
