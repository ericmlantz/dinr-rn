//imported 3rd party libraries
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

//imported from this repo
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import Screen from './app/components/Screen'
import ListItem from './app/components/lists/ListItem'
import Icon from './app/components/Icon'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import Switcher from './app/components/Switcher'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

const categories = [
  {
    label: 'Furniture',
    value: 1
  },
  {
    label: 'Clothing',
    value: 2
  },
  {
    label: 'Cameras',
    value: 3
  }
]
//create a component
export default function App () {
  // AppPicker Usage
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0])
  //----------------
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted) {
      alert('You need to enable permission to access the media library')
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  //render
  return (
    <Screen>
      <Text>Hey</Text>
    </Screen>

    // AppPicker Usage
    // AppPicker Usage
    // <AppPicker
    // selectedItem={category}
    // onSelectItem={item => setCategory(item)}
    // items={categories}
    // icon='apps' placeholder='Category'/>
    // <AppTextInput icon='email' placeholder="Email"/>
  )
}
