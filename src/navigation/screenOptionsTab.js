import React from 'react';
import { Text } from '../components/CustomBasic';
import { Icon } from 'react-native-elements';
import translate from '../lang/translate';
import colors from '../values/colors';
import Logo from '../components/Logo';

export default ({route})=> ({ 
  tabBarIcon : ({focused})=> {
    switch(route.name){
      case 'HomeStack':
        return <Logo style = {{width: 23, height: 23}} showWhite = {!focused} />
      case 'MyMusic':
        return <Icon name = "folder-music" type = "entypo" color = {focused ? colors.primary : "white"} />
    }
  },
  title : ({focused}) => {
    var name = ""
    switch(route.name){
      case 'HomeStack':
        name = translate("titleApp").toUpperCase();
        break;
      case 'MyMusic':
        name = translate("favs").toUpperCase();
        break;
    }
    return <Text style = {{fontSize: 10, color: focused ? colors.primary : "white"}} >{name}</Text> 
  },
  tabBarStyle: {backgroundColor: colors.secundary, bordborderColor: colors.secundary}
})