import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Text} from '../../components/CustomBasic';
import Logo from '../../components/Logo';
import translate from '../../lang/translate';
import screenNames from '../../navigation/screenNames';
import colors from '../../values/colors';

export default ({navigation}: NativeStackScreenProps<{}>) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.body}>
          <Button
            title={translate('register_free')}
            titleStyle={styles.buttonRegisterFree}
            onPress={() => navigation.navigate(screenNames.SignUp as never)}
          />
          <TouchableOpacity
            style={styles.textLoginContainer}
            onPress={() => navigation.navigate(screenNames.SignIn as never)}>
            <Text style={styles.textLogin}>{translate('login')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secundary,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textLoginContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  textLogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonRegisterFree: {
    color: 'black',
  }
});
