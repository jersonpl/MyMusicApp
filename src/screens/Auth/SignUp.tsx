/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Button, Input, Text} from '../../components/CustomBasic';
import translate from '../../lang/translate';
import colors from '../../values/colors';

export default () => {
  const [email, setEmail] = useState('');

  const onLogin = async () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.labelInput}>
          {translate('¿Cual es tu correo electrónico?')}
        </Text>
        <Input
          value={email}
          onChangeText={setEmail}
          containerStyle={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 8,
            height: 55,
            paddingTop: 8,
            marginTop: 10,
          }}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.textConfirmEmail}>
          {translate('Tendrás que confirmar esta dirección de correo')}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title={translate('Siguiente')}
            disabled={!email}
            disabledStyle={{backgroundColor: 'rgb(68,68,68)'}}
            disabledTitleStyle={{color: 'black'}}
            buttonStyle={{height: 50, paddingHorizontal: 40}}
            onPress={onLogin}
          />
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  labelInput: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  textConfirmEmail: {
    color: 'white',
    fontSize: 12,
  },
});
