//imported from 3rd party libraries
import { useState, useEffect } from 'react'
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import MyButton from '../components/MyButton'
import AppText from '../components/AppText'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import listingsApi from '../api/listings'

// create a component
const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    setLoading(true)
    const response = await listingsApi.getListings()
    setLoading(false)

    if (!response.ok) return setError(true)

    setError(false)
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't Retrieve the listings!</AppText>
          <MyButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={loading} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  )
}

// define your styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

//make this component available to the app
export default ListingsScreen
