//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

// create a component
const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}/>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.white,

  },
  detailsContainer: {
    justifyContent: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500'
  },
});

//make this component available to the app
export default ListItem;
