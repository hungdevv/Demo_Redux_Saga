import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";
import Octicons from 'react-native-vector-icons/Octicons';

const ZipCodeFormComponent = ({ navigation}) => {
    const [checked, setChecked] = React.useState("first");
    return(
        <View style={styles.container}>
            <LinearGradient
            colors={["#FF59F4", "#FF5978"]}
            style={styles.linearGradient}
            >
            <View style={styles.header}>
                <HeaderFormComponent
                title={"Quel est votre code postal?"}
                back={"RegionFormComponent"}
                navigation={navigation}
                icon={<Octicons name="file-zip" size={24} color="white" />}
                />
                <View style={styles.titleHeader}>
                    <Text style={styles.textStyle}>Un saul choix possible</Text>
                </View>
            </View>
            <View style={styles.content}>
              <View style={styles.contentView}>
                <Text style={styles.textStyleContent}>États-Unis</Text>
                <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                theme={{colors: {accent: 'white', text: 'white'}}}
                onPress={() => setChecked("first")}
                />
              </View>
              </View>
            <BottomComponent
                navigation={navigation}
                next='CityFormComponent' 
                onClick = {() => {}}
                />
            </LinearGradient>
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      flex: 2, 
      alignItems: "center", 
      paddingTop: 40,
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    textStyle: {
        color: 'white'
    },
    contentView: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    content: {
        width: '100%', 
        marginTop: 80, 
        flex: 6
    },
    textStyleContent: {
        flex: 1,
        color: 'white'
    },
    linearGradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    titleHeader: {
        marginBottom:16
    }
  });

export default ZipCodeFormComponent;