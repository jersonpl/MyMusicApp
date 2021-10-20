import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import translate from '../../lang/translate';
import Settings from '../../screens/Settings';
import BottonTab from './BottonTab';

type SignedInStackParamList = {
  BottonTab: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<SignedInStackParamList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="BottonTab">
      <Stack.Screen
        name="BottonTab"
        component={BottonTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTransparent: true,
          title: translate('settings'),
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export type PropsSettings = NativeStackScreenProps<
  SignedInStackParamList,
  'Settings'
>;
