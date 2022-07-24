//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

//imported from this repo
import Screen from './Screen'
import WelcomeScreen from '../screens/WelcomeScreen'

//create a component
const AuthNavigator = () =>
{

  //render 
  return (
    <View>
      <WelcomeScreen />
    </View>
  )
}

//styles
const styles = StyleSheet.create( {

} )

//make this component available to the app
export default AuthNavigator