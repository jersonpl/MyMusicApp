import React from 'react';
import { Text, TextPropTypes } from "react-native";

const _Text = (props) => (
  <Text {...props} />
)

_Text.propTypes = TextPropTypes

export default _Text;