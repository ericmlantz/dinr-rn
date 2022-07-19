//imported from 3rd party liraries
import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import MySafeAreaView from '../components/MySafeAreaView';
import Card from '../components/Card'
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red Jacket for Sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg')
  }
]
// create a component
const ListingsScreen = () => {
  return (
  <MySafeAreaView style={styles.screen}>
    <FlatList
      data={listings}
      keyExtractor={listing => listing.id.toString()}
      renderItem={({item}) =>
        <Card
        title={item.title}
        subTitle={'$' + item.price}
        image={item.image}
        />
      }
    />
   </MySafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },
});

//make this component available to the app
export default ListingsScreen;
