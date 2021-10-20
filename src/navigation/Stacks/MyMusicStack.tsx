import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import MyMusic from '../../screens/MyMusic';

type MyMusicStackParamList = {
  MyMusic: undefined;
};

const Stack = createNativeStackNavigator<MyMusicStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyMusic"
        component={MyMusic}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export type PropsMyMusic = NativeStackScreenProps<
  MyMusicStackParamList,
  'MyMusic'
>;
