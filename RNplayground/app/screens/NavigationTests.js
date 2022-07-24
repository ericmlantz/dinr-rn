//imported 3rd party libraries
import { StyleSheet, View, Text, Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//imported from this repo
import Screen from '../components/Screen'

//Components To Use As Tabbed Pages and Navigation Definitions
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const Link = () =>
{
  const navigation = useNavigation()
  return (
    <Button
      title='Click'
      onPress={ () => navigation.navigate( 'TweetDetails' ) } />
  )
}

const Tweets = ( { navigation } ) => (
  < Screen >
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={ () => navigation.navigate( 'TweetDetails', { id: 1 } ) } />
  </Screen >
)

const TweetDetails = ( { route } ) => (
  <Screen>
    <Text>Tweet Details { route.params.id } </Text>
  </Screen>
)

const Account = () =>
{
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
}

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={ {
      headerStyle:
        { backgroundColor: "dodgerblue" },
      headerTintColor: 'white',
    } }>
    <Stack.Screen
      name='Tweets'
      component={ Tweets }
      options={
        {
          headerStyle:
            { backgroundColor: "tomato" },
          headerTintColor: 'white',
        } }
    />
    <Stack.Screen
      name='TweetDetails'
      component={ TweetDetails }
      options={ { title: 'Tweet Details' } } //Update Screen Title DYNAMICALLY
    />

  </Stack.Navigator>
)


//create a component
export default function NavigationTests ()
{

  //render 
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ {
          tabBarActiveBackgroundColor: 'tomato',
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
          tabBarInactiveTintColor: 'black'
        } }
      >
        <Tab.Screen
          name="Feed"
          component={ FeedNavigator }
          options={ {
            tabBarIcon: ( { size, color } ) =>
              <MaterialCommunityIcons name='home' size={ size } color={ color } />
          } }
        />
        <Tab.Screen
          name="Account"
          component={ Account }
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

//styles
const styles = StyleSheet.create( {

} )

//make this component available to the app