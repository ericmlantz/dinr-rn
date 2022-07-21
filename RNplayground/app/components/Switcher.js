//imported 3rd party libraries
import { StyleSheet, Switch } from 'react-native'
import { useState } from 'react'

//imported from this repo
import Screen from './Screen'

//create a component
const Switcher = () => {
  const [isNew, setIsNew] = useState(false)

  //render 
  return (
    <Screen>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </Screen>
  )
}

//styles
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default Switcher