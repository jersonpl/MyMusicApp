/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Button, Input, Text} from '../../components/CustomBasic';
import translate from '../../lang/translate';
import colors from '../../values/colors';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.labelInput}>
          {translate('Correo electrónico o nombre de usuario')}
        </Text>
        <Input
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.inputContainerStyleEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.labelInput}>{translate('Contraseña')}</Text>
        <Input
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
          rightIcon={{
            name: showPass ? 'eye' : 'eye-off',
            type: 'feather',
            color: 'white',
            onPress: () => setShowPass(prev => !prev),
          }}
          containerStyle={styles.inputContainerStylePass}
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button
            title={translate('login')}
            disabled={!email || !password}
            titleStyle={{color: 'black'}}
            disabledStyle={{backgroundColor: 'rgb(68,68,68)'}}
            disabledTitleStyle={{color: 'white'}}
            buttonStyle={{height: 50, width: 200}}
            onPress={() => {}}
          />
          <Button
            title={translate('login_with_spotify')}
            disabled={false && (!email || !password)}
            disabledStyle={{backgroundColor: 'rgb(68,68,68)'}}
            titleStyle={{color: 'black'}}
            disabledTitleStyle={{color: 'white'}}
            buttonStyle={{height: 50, width: 200, marginTop: 20}}
            onPress={() => {}}
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
  error: {
    color: '#AA0000',
    borderColor: '#AA0000',
    borderWidth: 2,
    fontSize: 18,
    padding: 10,
    margin: 10,
    marginTop: 20,
  },
  inputContainerStyleEmail: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    height: 55,
    marginTop: 10,
    paddingTop: 8,
  },
  inputContainerStylePass: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    height: 55,
    marginTop: 10,
    paddingTop: 3,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
});
