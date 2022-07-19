import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import MyButton from "../components/MyButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={5}
      style={styles.background}
      source={{uri: 'https://sebringdesignbuild.com/wp-content/uploads/2020/06/modern-contemporary-house-ideas-exteriors-sebring-design-build-11.png'}}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton title='login' onPress={()=>console.log('login')}/>
        <MyButton title='Register' color="secondary" onPress={()=>console.log('register')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});

export default WelcomeScreen;
