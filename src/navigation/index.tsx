import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import SignedOutStack from './Stacks/SignedOutStack';
import SignedInStack from './Stacks/SignedInStack';

type RootStackParamList = {
  SignedInStack: undefined;
  SignedOutStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationRoot = ({log}: {log: boolean}) => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        initialRouteName={log ? 'SignedInStack' : 'SignedOutStack'}>
        <Stack.Screen
          name="SignedInStack"
          component={SignedInStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignedOutStack"
          component={SignedOutStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
