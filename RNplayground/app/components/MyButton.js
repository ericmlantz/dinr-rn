//import liraries
import React from 'react';
import {Button, Text, StyleSheet, TouchableHighlight } from 'react-native';

// create a component
const MyButton = ({children}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.button}>{children}</Text>
  </View> 
  )
};

// define your styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    width: 200,
    height: 50,
    borderRadius: 100,
  },
});

//make this component available to the app
export default MyButton;
