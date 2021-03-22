import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text, View
} from "react-native";
import { Button, TextInput } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;

const SignInComponent = () => {
    return(
        <View
          style={styles.viewStyle}
        >
          <Text
            style={styles.textTitle}
          >
            {title}
          </Text>
          <TextInput style={styles.marginInput} label="Email" value="" />
          <TextInput
            style={styles.marginInput}
            label="Mot de Passe"
            value="abc"
            secureTextEntry={true}
          />
          <Text>Nous contacter ou Aide</Text>
          <Button 
              mode="contained"
              color="#24cf5f"
              height={60}
              style= {styles.buttonStyle}
              >
              <Text style={{color: "white"}}>ME CONNECTER</Text>
          </Button>
          <Text style={{marginBottom: 8}}>Vous n'avez pas de compte? </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        color: "#182E44",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 40,
        marginBottom: 80

    },
    viewStyle: {
        backgroundColor: "#fff",
        width: "100%",
        paddingHorizontal: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        maxHeight: deviceHeight * 0.6,
    },
    marginInput: {
        marginBottom: 8,
        backgroundColor: 'white',
        borderWidth: 0.2,
    },
    buttonStyle: {
        marginVertical: 20
    }
})

export default SignInComponent;