import React from 'react';
import {Text} from '../components/CustomBasic';
import {Icon} from 'react-native-elements';
import translate from '../lang/translate';
import colors from '../values/colors';
import Logo from '../components/Logo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import screenNames from './screenNames';
import {StyleSheet} from 'react-native';

export default ({route}: NativeStackScreenProps<{}>): any => ({
  tabBarIcon: ({focused}: {focused: boolean}) => {
    switch (route.name) {
      case screenNames.HomeStack:
        return <Logo style={styles().logo} showWhite={!focused} />;
      case screenNames.MyMusicStack:
        return (
          <Icon
            name="folder-music"
            type="entypo"
            color={focused ? colors.primary : 'white'}
          />
        );
    }
  },
  title: ({focused}: {focused: boolean}) => {
    var name = '';
    switch (route.name) {
      case screenNames.HomeStack:
        name = translate('titleApp').toUpperCase();
        break;
      case screenNames.MyMusicStack:
        name = translate('favs').toUpperCase();
        break;
    }
    return <Text style={styles(focused).title}>{name}</Text>;
  },
  tabBarStyle: {
    backgroundColor: colors.secundary,
    bordborderColor: colors.secundary,
  },
});

const styles = (focused?: boolean) =>
  StyleSheet.create({
    title: {
      fontSize: 10,
      color: focused ? colors.primary : 'white',
    },
    logo: {
      width: 23,
      height: 23,
    },
  });
