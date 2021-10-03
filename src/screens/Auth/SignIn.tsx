import React, { useCallback, useContext, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { Button, Input, Text } from '../../components/CustomBasic';
import translate from '../../lang/translate';
import colors from '../../values/colors';

import { ApiConfig  } from 'react-native-spotify-remote';
import AppContext from '../../context/AppContext';



export default ({navigation}) => {
  const { token, authenticate, error, clearError } = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleConnect = useCallback((playURI?: string, authType?: ApiConfig["authType"]) => {
    console.log({
      playURI,
      authType
    })
    authenticate({
      showDialog: false,
      playURI,
      authType
    });
  }, [token])

  
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
            titleStyle = {{color: "black"}}
            disabledStyle = {{backgroundColor: "rgb(68,68,68)"}}
            disabledTitleStyle = {{color: "white"}}
            buttonStyle = {{height: 50, width: 200}}
            onPress = {()=> {}}
          />
          <Button 
            title = {translate("login_with_spotify")}
            disabled = {false && (!email || !password)}
            disabledStyle = {{backgroundColor: "rgb(68,68,68)"}}
            titleStyle = {{color: "black"}}
            disabledTitleStyle = {{color: "white"}}
            buttonStyle = {{height: 50, width: 200, marginTop: 20}}
            onPress = {()=> handleConnect()}
          />
        </View>
        {error && (
          <Text onPress={clearError} style={styles.error}>{error.code}: {error.message}</Text>
        )}
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
  },
  error: {
    color: "#AA0000",
    borderColor: "#AA0000",
    borderWidth: 2,
    fontSize: 18,
    padding: 10,
    margin: 10,
    marginTop: 20
  }
})