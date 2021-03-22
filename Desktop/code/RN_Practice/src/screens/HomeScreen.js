
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const image = require("../assets/background.png");
const logo_large = require("../assets/logo.png");

const HomeScreen = ({ navigation }) => {

  return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.stretch}>
        <View style={styles.styleContent}>
        <Image style={styles.background} source={logo_large} />
        <Text style={styles.text_style}>
          Eiusmod mollit Lorem incididunt mollit eu velit elit magna tempor quis
          ex.
        </Text>
        </View>
      </View>
        <View style={styles.inline_button }>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={styles.textSignIn}>SE CONNECTER</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.boxSignUp} onPress={() => {
              navigation.navigate("EntityFormComponent")}}>
              <Text style={styles.textSignUp}>INSCRIPTION GRATUITE {'\n'}EN 1MIN</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ImageBackground>
  </View>
  )
};


const styles = StyleSheet.create({
  styleContent: {
    height: '100%', 
    justifyContent: 'center'
  },
  button: {
    color: "red",
  },
  inline_button: {
    justifyContent: 'space-around',
    flexDirection: "row",
    alignItems: 'center'
  },
  background: {
    resizeMode: "stretch",
    width: 300,
    alignSelf: "center",
    marginBottom: 6
  },
  text_style: {
    color: "#fff",
    textAlign: "center",
  },
  stretch: {
    width: 300,
    height: 600,
    alignSelf: "center",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  textSignIn: {
    color: 'white',
    letterSpacing: 1, 
    textDecorationLine: 'underline',
    fontFamily: 'Avenir Next Condensed'
  },
  textSignUp: {borderRadius: 8, borderWidth: 1, backgroundColor: '#24cf5f', borderColor: '#24cf5f', padding: 4, color: 'white', textAlign: 'center'},
  boxSignUp: {
    borderRadius: 8, 
    borderWidth: 1, 
    backgroundColor: '#24cf5f', 
    borderColor: '#24cf5f', 
    padding: 4
  }
});

export default HomeScreen;