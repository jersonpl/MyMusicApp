import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenOptionsTab from '../screenOptionsTab';
import MyMusicStack from './MyMusicStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={screenOptionsTab}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false, headerTitleAlign: 'left'}}
      />
      <Tab.Screen
        name="MyMusicStack"
        component={MyMusicStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};