import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../values/colors';
import IsLoading from '../IsLoading';

export default ({
  children,
  isLoading,
}: {
  children?: any;
  isLoading?: boolean;
}) => {
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
