import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

import MySafeAreaView from '../components/MySafeAreaView'

export default function TryTextInput() {
  const [firstName, setFirstName] = useState('')
  return (
    <MySafeAreaView>
      <Text>{firstName}</Text>
      <TextInput
      secureTextEntry
      clearButtonMode='always'
      keyboardType='web-search'
      onChangeText={text => setFirstName(text)}
      style={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
      }}
      placeholder='First Name'/>
      
    </MySafeAreaView>
  )
}
const styles = StyleSheet.create({})