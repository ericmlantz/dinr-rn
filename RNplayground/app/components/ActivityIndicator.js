//imported 3rd party libraries
import Lottie from 'lottie-react-native'
import React from 'react'

//imported from this repo

//create a component
export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null

  //render
  return (
    <Lottie
      autoPlay
      loop
      source={require('../assets/animations/loader.json')}
    />
  )
}

//make this component available to the app
