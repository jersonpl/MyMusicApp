import React from 'react';
import { ActivityIndicator, View } from "react-native";
import colors from "../values/colors";

export default ({visible}: {visible: boolean}) => !visible ? null : (
  <View style = {{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.secundary}}>
    <ActivityIndicator size = "large" color = {colors.primary} />
  </View>
)