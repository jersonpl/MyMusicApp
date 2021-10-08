import React from 'react';
import {Text, TextProps} from 'react-native';

class _Text extends React.Component<TextProps> {
  render() {
    return <Text {...this.props} />;
  }
}

export default _Text;
