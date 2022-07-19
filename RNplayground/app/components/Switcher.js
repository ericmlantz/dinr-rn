//imported 3rd party liraries
import { StyleSheet, Switch } from 'react-native'
import { useState } from 'react'

//imported from this repo
import MySafeAreaView from './MySafeAreaView'

//create a component
const Switcher = () => {
  const [isNew, setIsNew] = useState(false)

  //render 
  return (
    <MySafeAreaView>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </MySafeAreaView>
  )
}

//styles
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default Switcher