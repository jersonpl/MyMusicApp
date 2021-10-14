import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, InputProps} from 'react-native-elements';

class _Input extends React.Component<InputProps> {
  render() {
    let {inputContainerStyle, inputStyle, errorStyle} = this.props;
    return (
      <Input
        {...this.props}
        inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
        inputStyle={[styles.inputStyle, inputStyle]}
        errorStyle={[styles.errorStyle, errorStyle]}
      />
    );
  }
}

export default _Input;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {color: 'white'},
  errorStyle: {
    height: 0,
    flex: 0,
  },
});
