import React from 'react';
import { NavigationContainer, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Favs from '../screens/Favs';
import { useSelector } from '../redux/useSelector';
import { UserProfile } from '../interfaces';
import Playlist from '../screens/Home/Playlist';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const NavigationRoot = ({log}: {log: boolean}) => {

  return (
    <NavigationContainer onReady = {()=> RNBootSplash.hide({ fade: true })} >
      <Stack.Navigator initialRouteName = {log ? 'SignedInStack' : 'SignedOutStack'} >
        <Stack.Screen name = "SignedInStack"  component = {SignedInStack} options={{headerShown : false}} />
        <Stack.Screen name = "SignedOutStack" component = {SignedOutStack} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SignedOutStack = () => {
  return(
    <Stack.Navigator initialRouteName = "Auth" >
      <Stack.Screen name = "Auth" component = {Auth} options = {{headerShown: false}} />
      <Stack.Screen name = "SignIn" component = {SignIn} options = {{headerTransparent: true, title: translate("login"), headerTintColor: "white", headerBackTitleVisible: false}} />
      <Stack.Screen name = "SignUp" component = {SignUp} options = {{headerTransparent: true, title: translate("create_account"), headerTintColor: "white", headerBackTitleVisible: false}} />
    </Stack.Navigator>
  )
}

const SignedInStack = ({navigation}) => {
  return(
    <Stack.Navigator initialRouteName = "BottonTab">
      <Stack.Screen name = "BottonTab" component = {BottonTab} options={{headerShown : false}} />
      <Stack.Screen name = "Settings" component = {Settings} options = {{headerTransparent: true, title: translate("settings"), headerTintColor: "white", headerBackTitleVisible: false}} />
    </Stack.Navigator>
  )
}

const BottonTab = () => {
  return(
    <Tab.Navigator initialRouteName = {"HomeStack"} screenOptions = {screenOptionsTab}>
      <Tab.Screen name = "HomeStack" component = {HomeStack} options = {{headerShown: false, headerTitleAlign: "left"}} />
      <Tab.Screen name = "MyMusic" component = {MyMusicStack} options = {{headerShown: false}}  />
    </Tab.Navigator>
  )
}

const HomeStack = () => {
  const [userProfile] = useSelector(({userProfile}: {userProfile: UserProfile}) => [userProfile]);
  return (
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {Home} options = {(props: any) => header({...props, title: userProfile.display_name})}/>
      <Stack.Screen name = "Playlist" component = {Playlist} options = {{ headerTransparent: true, title: "", headerTintColor: "white", headerBackTitleVisible: false }}/>
    </Stack.Navigator>
  )
}

const MyMusicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "MyMusicStack" component = {Favs} options = {{headerShown: false}}/>
    </Stack.Navigator>
  )
}