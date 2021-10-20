import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../values/colors';
import IsLoading from '../IsLoading';

type Props = {
  children?: any;
  isLoading?: boolean;
};

export default ({children, isLoading}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isLoading ? <IsLoading visible /> : children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secundary,
  },
  container: {
    flex: 1,
  },
});
