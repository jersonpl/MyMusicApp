import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { Button, Input, Text } from '../../components/CustomBasic';
import Logo from '../../components/Logo';
import translate from '../../lang/translate';
import request from '../../utils/request';
import colors from '../../values/colors';

export default ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const onLogin = async () => {
    
  }

  return (
    <SafeAreaView style = {styles.safeArea}>
      <StatusBar barStyle = "light-content" />
      <View style = {styles.container}>
        <Text style = {styles.labelInput}>{translate("Correo electrónico o nombre de usuario")}</Text>
        <Input 
          value = {email}
          onChangeText = {setEmail}
          inputContainerStyle = {{borderBottomWidth: 0}}
          inputStyle = {{color: "white"}}
          containerStyle = {{backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 8, height: 55, paddingTop: 8, marginTop: 10}}
          errorStyle = {{height: 0, flex: 0}}
          autoCapitalize = "none"
          keyboardType = "email-address"
        />
        <Text style = {styles.labelInput}>{translate("Contraseña")}</Text>
        <Input 
          value = {password}
          onChangeText = {setPassword}
          secureTextEntry = {!showPass}
          inputStyle = {{color: "white"}}
          rightIcon = {{name: showPass ? "eye" : "eye-off", type: "feather", color: "white", onPress: () => setShowPass(prev => !prev)}}
          inputContainerStyle = {{borderBottomWidth: 0}}
          containerStyle = {{backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 8, height: 55, paddingTop: 3, marginTop: 10}}
          errorStyle = {{height: 0, flex: 0}}
          autoCapitalize = "none"
        />
        <View style = {styles.buttonContainer}>
          <Button 
            title = {translate("login")}
            disabled = {!email || !password}
            disabledStyle = {{backgroundColor: "rgb(68,68,68)"}}
            disabledTitleStyle = {{color: "black"}}
            buttonStyle = {{height: 50, paddingHorizontal: 40}}
            onPress = {onLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: colors.secundary,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  labelInput: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginTop: 20
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 50
  }
})