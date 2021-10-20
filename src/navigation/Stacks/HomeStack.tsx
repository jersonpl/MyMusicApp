import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import header from '../header';
import {useSelector} from '../../redux/useSelector';
import PlaylistScreen from '../../screens/Home/Playlist';
import {Playlist} from '../../interfaces';

type HomeStackParamList = {
  Home: undefined;
  Playlist: {playlist: Playlist};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default () => {
  const userProfile = useSelector(state => state.userProfile);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={(props: any) =>
          header({...props, title: userProfile.display_name})
        }
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
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

export type PropsPlaylist = NativeStackScreenProps<
  HomeStackParamList,
  'Playlist'
>;

export type PropsHome = NativeStackScreenProps<HomeStackParamList, 'Home'>;
