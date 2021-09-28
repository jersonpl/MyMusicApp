import React, { useState } from 'react';
import { SafeAreaView, View } from "react-native"
import { Button } from 'react-native-elements';
import { Text } from '../../components/CustomBasic';

export default () => {
  const [name, setName] = useState("Jerson")
  
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {{flex: 1, paddingTop: 50}}>
        <Text style = {{fontSize: 20, fontWeight: "bold"}}>Hola {name}</Text>
        <Button 
          title = "press"
          onPress = {()=> {
            setName(prev => prev + "s")
          }}
        />
      </View>
    </SafeAreaView>
  )
}