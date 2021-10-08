import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ButtonProps} from 'react-native-elements';
import colors from '../../values/colors';

class _Button extends React.Component<ButtonProps> {
  render() {
    let {buttonStyle, titleStyle} = this.props || {};
    return (
      <Button
        {...this.props}
        buttonStyle={[styles.buttonStyle, buttonStyle]}
        titleStyle={[styles.titleStyle, titleStyle]}
      />
    );
  }
}

export default _Button;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 30,
    height: 60,
    backgroundColor: colors.primary,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
