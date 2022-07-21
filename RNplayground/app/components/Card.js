//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

// create a component
const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 10
  }
});

//make this component available to the app
export default Card;
