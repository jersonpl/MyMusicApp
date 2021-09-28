import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import colors from '../../values/colors';

class _Button extends React.Component<ButtonProps> {



  render(){
    let { buttonStyle, titleStyle } = this.props || {};
    return <Button 
      {...this.props} 
      buttonStyle = {[{borderRadius: 30, height: 60, backgroundColor: colors.primary}, buttonStyle]}
      titleStyle = {[{fontSize: 18, fontWeight: "bold"}, titleStyle]}
    />
  }
}

export default _Button;