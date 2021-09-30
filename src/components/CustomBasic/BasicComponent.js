import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native"
import colors from '../../values/colors';

export default ({children}) => {
  return (
    <SafeAreaView style = {styles.safeArea}>
      <View style = {styles.container}>
        {children}
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
    flex: 1
  }
})