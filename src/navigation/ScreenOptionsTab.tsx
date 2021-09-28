import React from 'react';
import { Text } from '../components/CustomBasic';
import { Icon } from 'react-native-elements';
import translate from '../lang/translate';
import colors from '../values/colors';

export default ({route})=> ({ 
  tabBarIcon : ({focused})=> {
    switch(route.name){
      case 'HomeStack':
        return <Icon name = "home" color = {focused ? colors.primary : "black"} />
    }
  },
  title : ({focused}) => {
    var name = ""
    switch(route.name){
      case 'HomeStack':
        name = translate("home").toUpperCase();
        break;
    }
    return <Text style = {{fontSize: 10, color: focused ? colors.primary : "black"}} >{name}</Text> 
  },
})