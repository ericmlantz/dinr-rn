//import libraries
import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// create a component
const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1
  },
  view: {
    flex: 1
  }
})
//make this component available to the app
export default Screen;