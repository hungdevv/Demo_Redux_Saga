import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";
import Ionicons from 'react-native-vector-icons/Ionicons';


const FromFormComponent = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <LinearGradient
            colors={["#FF59F4", "#FF5978"]}
            style={styles.linearGradient}
            >
            <View style={styles.header}>
                <HeaderFormComponent
                title={"Où habitez-vous?"}
                back={"OriginFormComponent"}
                navigation={navigation}
                icon={<Ionicons name="location-outline" color="#fff" size={24}/>}
                />
            </View>
            <View style={styles.content}>
              <View onStartShouldSetResponder={() => {navigation.navigate('CountryFormComponent')}} style={styles.box}>
                <Text style={styles.contentText}>Ma localisation</Text>
                <View style ={styles.contentBox}>
                  <EvilIcons name="location" size={20} color="white" />
                  <Text style={styles.boxText}>Me géolocaliser ?</Text>
                </View>
              </View>
            </View>
            <BottomComponent
                navigation={navigation}
                next='CountryFormComponent' 
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
      flex: 1, 
      alignItems: "center", 
      paddingTop: 40,
      position: 'relative',
      width: '100%'
    },
    linearGradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    content: {
      flex: 3,
      width: '90%',
    },
    contentText: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      width: '100%',
      paddingBottom: 4,
      fontSize: 16,
      color: 'white'
    },
    box: {
      position: 'relative',
    },
    contentBox: {
      position: 'absolute', 
      flexDirection: 'row',
      right: 0,
      top: 40,
    },
    boxText: {
      color: 'white',
      fontSize: 12
    }
  });

export default FromFormComponent;