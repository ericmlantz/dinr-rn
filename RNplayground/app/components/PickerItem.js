//imported 3rd party liraries
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

//imported from this repo


//create a component
const PickerItem = ({label, onPress}) => {

  //render 
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

//styles
const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

//make this component available to the app
export default PickerItem