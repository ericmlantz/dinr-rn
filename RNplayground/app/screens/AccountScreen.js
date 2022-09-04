//import 3rd party libraries
import { View, StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem'
import ListItemSeperator from '../components/lists/ListItemSeparator'
import useAuth from '../auth/useAuth'

const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: 'Messages'
  }
]

// create a component
const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth()
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          style={styles.listItem}
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor={colors.danger} />}
        onPress={() => logOut()}
      />
    </Screen>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    flex: 1,
    backgroundColor: colors.light
  }
})

//make this component available to the app
export default AccountScreen
