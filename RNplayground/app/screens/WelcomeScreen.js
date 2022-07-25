import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";


import MyButton from "../components/MyButton";
import routes from "../navigation/routes";


function WelcomeScreen ( { navigation } ) 
{
  return (
    <ImageBackground
      blurRadius={ 5 }
      style={ styles.background }
      source={ require( '../assets/background.jpg' ) }
    >
      <View style={ styles.logoContainer }>
        <Image style={ styles.logo } source={ require( "../assets/logo-red.png" ) } />
        <Text style={ styles.tagline }>Sell What You Don't Need</Text>
      </View>
      <View style={ styles.buttonsContainer }>
        <MyButton title='login' onPress={ () => navigation.navigate( routes.LOGIN_SCREEN ) } />
        <MyButton title='Register' color="secondary" onPress={ () => navigation.navigate( routes.REGISTER_SCREEN ) } />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create( {
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: 'flex-end',

  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
} );

export default WelcomeScreen;
