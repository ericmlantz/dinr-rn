//imported 3rd party libraries
import Lottie from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet } from 'react-native'

//imported from this repo

//create a component
export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null

  //render
  return (
    <View style={styles.overlay}>
      <Lottie
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.8
  }
})
//make this component available to the app
