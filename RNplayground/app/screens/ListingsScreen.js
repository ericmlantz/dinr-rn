//imported from 3rd party libraries
import { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import MyButton from '../components/MyButton'
import AppText from '../components/AppText'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import listingsApi from '../api/listings'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'

// create a component
const ListingsScreen = ({ navigation }) => {
  //this is if only using one Api call. Look below for how to use for mutliple. ↓
  const {
    data: listings,
    error,
    loading,
    request: loadListings
  } = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings(1, 2, 3)
  }, [])

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't Retrieve the listings!</AppText>
            <MyButton title="Retry" onPress={loadListings} />
          </>
        )}
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
    </>
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
