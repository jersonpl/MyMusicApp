import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import Auth from '../../screens/Auth';
import SignIn from '../../screens/Auth/AuthSpotify';
import translate from '../../lang/translate';
import SignUp from '../../screens/Auth/SignUp';

type SignedOutStackParamList = {
  'Auth': undefined;
  'SignIn': undefined;
  'SignUp': undefined;
};

const Stack = createNativeStackNavigator<SignedOutStackParamList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTransparent: true,
          title: translate('login'),
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTransparent: true,
          title: translate('create_account'),
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export type PropsAuth = NativeStackScreenProps<SignedOutStackParamList, 'Auth'>;
