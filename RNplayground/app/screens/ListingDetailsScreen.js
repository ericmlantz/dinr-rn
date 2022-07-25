//import libraries
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

// create a component
const ListingDetailsScreen = ( { route } ) =>
{
  const listing = route.params
  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={ listing.image } />
      <View style={ styles.detailsContainer }>
        <AppText style={ styles.title }>{ listing.title }</AppText>
        <AppText style={ styles.price }>{ listing.price }</AppText>
        <View style={ styles.userContainer }>
          <ListItem
            image={ require( '../assets/mosh.jpg' ) }
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create( {
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40,
  }
} );

//make this component available to the app
export default ListingDetailsScreen;
