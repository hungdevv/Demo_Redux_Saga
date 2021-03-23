import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React, { useEffect } from "react";
import {Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";
import { useSelector, useDispatch } from "react-redux";
import { getRegion } from '../redux/actions/Location'; 
import { FlatList } from "react-native-gesture-handler";
import styles from '../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegionFormComponent = ({ navigation, route }) => {

  const data = useSelector((state) => state.location.Regions);
  const [checked, setChecked] = React.useState("first");
  const [showErr, setShowErr] = React.useState(true);
  const id = route.params.idCountry

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegion(id));
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF59F4", "#FF5978"]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <HeaderFormComponent
            title={"Quel est votre région"}
            back={"CountryFormComponent"}
            navigation={navigation}
            icon={<Ionicons name="moon-outline" color="#fff" size={24} />}
          />
          <View style={styles.titleHeader}>
            <Text style={styles.textStyle}>Quelle est votre région</Text>
          </View>
        </View>
        <View style={styles.content}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.contentView}>
                  <Text style={styles.textStyleContent}>{item.name}</Text>
                  <RadioButton
                    value={item.id}
                    status={checked === item.id ? "checked" : "unchecked"}
                    theme={{colors: {accent: 'white', text: 'white'}}}
                    onPress={() => {
                      setChecked(item.id) 
                      setShowErr(false)
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <BottomComponent
          navigation={navigation}
          next="CityFormComponent"
          onClick={() => {}}
          data={{idCountry: id, idRegion: checked}}
          errMess={showErr}
        />
      </LinearGradient>
    </View>
  );
};

export default RegionFormComponent;
