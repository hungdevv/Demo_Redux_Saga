
import Feather from 'react-native-vector-icons/Feather';import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../redux/actions/Location';
import { getIdCity } from '../redux/actions/User';
import styles from '../styles/styles';
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";

const CityFormComponent = ({ navigation, route }) => {
  const data = useSelector((state) => state.location.Cities);
    const [checked, setChecked] = React.useState("first");
    const dispatch = useDispatch();
    const idCountry = route.params.idCountry;
    const idRegion = route.params.idRegion;
    const [showErr, setShowErr] = React.useState(true);


    useEffect(() => {
      dispatch(getCity(idCountry,idRegion))
    })

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={["#FF59F4", "#FF5978"]}
            style={styles.linearGradient}
            >
            <View style={styles.header}>
                <HeaderFormComponent
                title={"Quel est votre ville?"}
                back={"RegionFormComponent"}
                navigation={navigation}
                icon={<Feather name="folder" color="#fff" size={24} />}
                />
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
                next='SignUpFormComponent'
                errMess={showErr}
                onClick={() => dispatch(getIdCity(checked))}/>
            </LinearGradient>
        </View>

    )
};

export default CityFormComponent;