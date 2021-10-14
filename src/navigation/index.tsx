import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import RNBootSplash from 'react-native-bootsplash';
//import SignIn from '../screens/Auth/SignIn';
import SignIn from '../screens/Auth/AuthSpotify';
import translate from '../lang/translate';
import SignUp from '../screens/Auth/SignUp';
import Settings from '../screens/Settings';
import screenOptionsTab from './screenOptionsTab';
import header from './header';
import MyMusic from '../screens/MyMusic';
import {useSelector} from '../redux/useSelector';
import {UserProfile} from '../interfaces';
import Playlist from '../screens/Home/Playlist';
import screenNames from './screenNames';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const NavigationRoot = ({log}: {log: boolean}) => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        initialRouteName={
          log ? screenNames.SignedInStack : screenNames.SignedOutStack
        }>
        <Stack.Screen
          name={screenNames.SignedInStack}
          component={SignedInStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenNames.SignedOutStack}
          component={SignedOutStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SignedOutStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.Auth}>
      <Stack.Screen
        name={screenNames.Auth}
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.SignIn}
        component={SignIn}
        options={{
          headerTransparent: true,
          title: translate('login'),
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={screenNames.SignUp}
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

const SignedInStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.BottonTab}>
      <Stack.Screen
        name={screenNames.BottonTab}
        component={BottonTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.Settings}
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

const BottonTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.HomeStack}
      screenOptions={screenOptionsTab}>
      <Tab.Screen
        name={screenNames.HomeStack}
        component={HomeStack}
        options={{headerShown: false, headerTitleAlign: 'left'}}
      />
      <Tab.Screen
        name={screenNames.MyMusicStack}
        component={MyMusicStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  const [userProfile] = useSelector(
    ({userProfile}: {userProfile: UserProfile}) => [userProfile],
  );
  return (
    <Stack.Navigator initialRouteName={screenNames.Home}>
      <Stack.Screen
        name={screenNames.Home}
        component={Home}
        options={(props: any) =>
          header({...props, title: userProfile.display_name})
        }
      />
      <Stack.Screen
        name={screenNames.Playlist}
        component={Playlist}
        options={{
          headerTransparent: true,
          title: '',
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MyMusicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MyMusic}
        component={MyMusic}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
