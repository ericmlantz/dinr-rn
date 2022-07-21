//imported 3rd party libraries
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

//imported from this repo
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import MySafeAreaView from './app/components/MySafeAreaView';
import ListItem from './app/components/ListItem';
import Icon from './app/components/Icon'
import ListingsScreen from './app/screens/ListingsScreen';
import TryTextInput from './app/screens/TryTextInput';
import AppTextInput from './app/components/AppTextInput';
import Switcher from './app/components/Switcher';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
]
//create a component
export default function App() {

// AppPicker Usage
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0])
//----------------

  //render
  return (
      <MessagesScreen />

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