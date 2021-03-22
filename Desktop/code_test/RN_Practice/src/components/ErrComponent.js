import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ErrComponent = ({err}) => {
  return (
  <View style={styles.errBox}>
    <View style={styles.leftBox}>
      <MaterialIcons name="error" size={24} color="white" />
      <Text style={styles.textErr}>Le champ est vide</Text>
    </View>
    <Ionicons 
      name="close-sharp" 
      size={24} 
      color="white"
      onPress={
        () => {err()}
      }
      />
  </View>
  )
};


const styles = StyleSheet.create({
  errBox: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    bottom: 100,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1
  },
  leftBox: {
    flexDirection: 'row',
    flex: 1,

  },
  textErr: {
    color: 'white',
    marginLeft: 10
  },

})

export default ErrComponent;