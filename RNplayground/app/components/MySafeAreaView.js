//import liraries
import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// create a component
const MySafeAreaView = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
  }
})
//make this component available to the app
export default MySafeAreaView;