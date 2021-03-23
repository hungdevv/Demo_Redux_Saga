import LinearGradient  from "react-native-linear-gradient";
import React, { useEffect } from "react";
import {Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions/Location";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../styles/styles'



const CountryFormComponent = ({ navigation, state }) => {
  const [checked, setChecked] = React.useState("first");
  const [showErr, setShowErr] = React.useState(true);

  const data = useSelector(
    (state) => state.location.Countries.countries
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF59F4", "#FF5978"]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <HeaderFormComponent
            title={"Quel est votre pays"}
            back={"FromFormComponent"}
            navigation={navigation}
            icon={<SimpleLineIcons name="map" color="#fff" size={24} />}
          />
          <View style={styles.titleHeader}>
            <Text style={styles.textStyle}>Un saul choix possible</Text>
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
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
          errMess={showErr}
          next="RegionFormComponent"
          data={{idCountry: checked}}
          onClick = {() => {}}
          />
      </LinearGradient>
    </View>
  );
};

export default CountryFormComponent;
