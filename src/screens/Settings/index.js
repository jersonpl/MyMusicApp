import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '../../components/CustomBasic';
import BasicComponent from "../../components/CustomBasic/BasicComponent"
import translate from '../../lang/translate';

export default () => {
  return (
    <BasicComponent>
      <View style = {styles.container}>
        <View>
          <Text style = {styles.nameText}>Jerson Pérez</Text>
        </View>
        <Button 
          title = {translate("logout")}
          buttonStyle = {{backgroundColor: "white", width: 150, height: 40}}
          titleStyle = {{color: "black"}}
        />
      </View>
    </BasicComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  nameText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  }
})