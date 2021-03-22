import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderFormComponent = ({title, navigation, back, icon}) => {
  return (
    <View style={styles.headerStyle}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="white"
        style={styles.iconBack}
        onPress={() => {
          navigation.navigate(`${back}`);
        }}
      />
      <View style={styles.boxBorder}>
        <View style={styles.boxItem}>
          {icon}
        </View>
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    alignItems: "center", 
    position: 'relative',
    width: '100%',
    flex: 1,
  },
  iconBack: {
    position: 'absolute',
    top: 0,
    left: 20
  },
  headerText: {
    textAlign: 'center',
    color: "white", 
    fontSize: 24, 
    fontFamily: 'ANC-Bold',
  },
  header: {
    flex: 1, 
    alignItems: "center", 
    marginTop: 40,
    position: 'relative',
    width: '100%'
  },
  boxBorder: {
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 66, 
    height: 66, 
    width: 66, 
    position: 'relative',
    backgroundColor:'rgba(255,255,255,0.3)',

  },
  boxItem: {
    position: 'absolute', 
    top: 21, 
    right: 21
  }
    
});

export default HeaderFormComponent;
