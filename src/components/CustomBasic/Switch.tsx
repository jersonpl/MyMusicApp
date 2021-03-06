import React, {useRef, useEffect, useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Animated, {EasingNode} from 'react-native-reanimated';

interface Props {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

export default ({value, onValueChange, disabled}: Props) => {
  const [val, setVal] = useState(value);
  const [checkVal, setCheckVal] = useState(false);
  let wid = 35;

  const paddingLeftAnimated = useRef(
    new Animated.Value(val ? 3 : wid - 14),
  ).current;

  useEffect(() => {
    animated();
  }, [val]);

  useEffect(() => {
    setVal(value);
  }, [checkVal, value]);

  const animated = () => {
    paddingLeftAnimated.setValue(val ? 3 : wid - 14);
    Animated.timing(paddingLeftAnimated, {
      toValue: val ? wid - 14 : 3,
      duration: 150,
      easing: EasingNode.linear,
      useNativeDriver: false,
    }).start();
  };

  const paddingLeft = paddingLeftAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const onChange = async (_value: boolean) => {
    setVal(_value);
    onValueChange(_value);
    await wait(500);
    setCheckVal(prev => !prev);
  };

  const wait = (time: number) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  return (
    <Pressable
      onPress={() => (!disabled ? onChange(!val) : {})}
      style={styles.container}>
      <Animated.View style={[styles.animatedView, {paddingLeft}]}>
        <View
          style={[
            styles.circle,
            {backgroundColor: !val ? 'rgb(36,117,39)' : 'rgb(42,205,34)'},
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: wid,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 2,
    backgroundColor: 'rgb(47,64,70)',
  },
  animatedView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  circle: {
    width: 11,
    height: 11,
    borderRadius: 10,
    elevation: 2,
  },
});
