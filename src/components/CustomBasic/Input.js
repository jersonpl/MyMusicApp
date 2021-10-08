import React from 'react';
import {Input, InputProps} from 'react-native-elements';

class _Input extends React.Component<InputProps> {
  render(){
    return <Input {...this.props} />;
  }
}

export default _Input;
