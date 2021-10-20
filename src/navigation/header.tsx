import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../values/colors';

export default ({
  navigation,
  title,
}: {
  navigation: any;
  title: string;
}): any => ({
  headerTitle: title,
  headerTitleAlign: 'left',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: colors.secundary,
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOffset: {height: 0},
  },
  headerRight: () => (
    <View style={{paddingHorizontal: 10}}>
      <Icon
        name="settings-outline"
        type="ionicon"
        color="white"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  ),
});
