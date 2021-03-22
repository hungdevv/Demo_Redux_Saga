import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import BottomComponent from "./BottomComponent";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeaderFormComponent from "./HeaderFormComponent";
import { useSelector, useDispatch } from 'react-redux';
import { getOrigin } from '../redux/actions/User';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OriginFormComponent = ({ navigation }) => {

  const data = [
    { id: 0, name: "Peu importe" },
    { id: 1, name: "Algérien" },
    { id: 2, name: "Marocain" },
    { id: 3, name: "Tunisien" },
    { id: 4, name: "Autre" },
    { id: 5, name: "Je la garde pour moi" },
  ];
  const [checked, setChecked] = React.useState(0);
  const [showErr, setShowErr] = React.useState(true);


  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF59F4", "#FF5978"]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <HeaderFormComponent
            title={"Quelle est votre origine ?"}
            back={"BirthdayFormComponent"}
            navigation={navigation}
            icon={<SimpleLineIcons name="map" color="#fff" size={24} />}
          />
          <View style={styles.headerContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.content}>
                    <Text style={styles.contentText}>{item.name}</Text>
                    <RadioButton
                      value={`${item.id}`}
                      status={checked === `${item.id}` ? "checked" : "unchecked"}
                      theme={{colors: {accent: 'white', text: 'white'}}}
                      onPress={() => {
                        setShowErr(false)
                        setChecked(`${item.id}`)}}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
        <BottomComponent 
          navigation={navigation}
          errMess={showErr} 
          next={"FromFormComponent"} 
          onClick = {() => {dispatch(getOrigin(parseInt(checked)))}}
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
    position: "relative",
    width: "100%",
  },
  iconBack: {
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: "red",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    marginTop: 20,
  },
  headerContent: {
    width: "100%",
    flex: 2,
    marginLeft: 40,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    width: "90%",
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  contentText: {
    flex: 1,
    color: "white",
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    borderColor: "#ccc",
  },
});

export default OriginFormComponent;
