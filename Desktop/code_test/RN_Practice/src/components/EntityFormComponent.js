import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient"; // import LinearGradient
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from './HeaderFormComponent';
import {useDispatch } from 'react-redux';
import { getGender } from '../redux/actions/User'


const EntityFormComponent = ({navigation}) => {

  const [checked, setChecked] = React.useState('0');
  const [showErr, setShowErr] = React.useState(true);
  console.log(showErr);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF59F4", "#FF5978"]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <HeaderFormComponent
            title={'Vous êtes:'}
            back={'HomeScreen'}
            navigation={navigation}
            icon={
              <View style={styles.boxIcons}>
                <Ionicons style={styles.icon1} name="male" size={24} color="white" />
                <Ionicons style={styles.icon2} name="female" size={24} color="white" />
              </View>
            }
          />
          <View style={styles.boxContent}>
              <View style={styles.content}>
               <Text style={styles.contentText}>Homme</Text>
                <RadioButton
                value='1'
                status={checked === "1" ? "checked" : "unchecked"}
                theme={{colors: {accent: 'white', text: 'white'}}}
                onPress={
                  () => {
                    setShowErr(false)
                    setChecked('1')}
                }
                />
              </View>

              <View style={styles.content}>
                  <Text style={styles.contentText}>Femme</Text>
                <RadioButton
                value="2"
                status={checked === "2" ? "checked" : "unchecked"}
                theme={{colors: {accent: 'white', text: 'white'}}}
                onPress={() => {
                  setShowErr(false)
                  setChecked('2')
                }
              }
                />
              </View>
          </View>
        </View>
        <BottomComponent
          navigation={navigation}
          next={'BirthdayFormComponent'}
          errMess={showErr}
          data = {{id: 0, name: 'test'}}
          onClick= {
            () => {
              // closeErr()
              dispatch(getGender(parseInt(checked)))}
          }
        />
      </LinearGradient>
    </View>
  );
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
  boxContent: {
    width: '100%', 
    marginTop: 80, flex: 6
  },
  iconBack: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    flexDirection: 'row', 
    marginHorizontal: 20,
    paddingVertical: 10, 
    borderBottomColor: '#ddd', 
    borderBottomWidth: 0.3, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerText: {
    color: "white", 
    fontSize: 24, 
    marginTop: 20,
    fontFamily: 'ANC-Bold',
  },
  contentText: {
    flex: 1, 
    color: 'white',
    fontFamily: 'ANC-Bold'
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  boxIcons: {
    flexDirection: 'row'
  },
  icon1: {
    position: 'absolute', 
    right: -5, 
    top: -5
  },
  icon2: {
    position: 'absolute', right: 5
  }
});
export default EntityFormComponent;
