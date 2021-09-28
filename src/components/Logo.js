import React from 'react'
import { View, Image } from "react-native";
import logo from '../assets/logo.png'

export default ({style}) => (
  <View style = {[{width: 100, height: 100}, style]}>
    <Image source = {logo} style = {{width: "100%", height: "100%", resizeMode: "cover"}} />
  </View>
)