import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from "@react-native-community/datetimepicker";
import LinearGradient  from "react-native-linear-gradient"; // import LinearGradient
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch} from "react-redux";
import { getBirthday } from "../redux/actions/User";
import BottomComponent from "./BottomComponent";
import HeaderFormComponent from "./HeaderFormComponent";

const BirthdayFormComponent = ({ navigation, route }) => {
  const [date, setDate] = React.useState(new Date(100000000000));
  const [show, setShow] = React.useState(false);
  const [showErr, setShowErr] = React.useState(true);
  const [day, setDay] = React.useState("JJ");
  const [month, setMonth] = React.useState("MM");
  const [year, setYear] = React.useState("AAAA");
  const dispatch = useDispatch();
  const birthday = `${year}-${month}-${day}`;


  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    if (event.type === "set") {
      setDate(currentDate);
      setDay(currentDate.getDate().toString());
      setMonth((currentDate.getMonth() + 1).toString());
      setYear(currentDate.getFullYear().toString());
      setShowErr(false);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const closeErr = () => {
    (year == 'AAAA') ? setShowErr(true) : setShowErr(false);
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FF59F4", "#FF5978"]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <HeaderFormComponent
            title={"Quelle est votre date de naissance?"}
            back={"EntityFormComponent"}
            navigation={navigation}
            icon={
            <FontAwesome5 name="birthday-cake" color="#fff" size={24}/>}
          />
          <View style={styles.containerDate}>
            <TouchableOpacity
              onPress={showDatepicker}
              style={{ flexDirection: "row" }}
            >
              <Text style={styles.dmy}>{day}</Text>
              <Text style={styles.slash}> / </Text>
              <Text style={styles.dmy}>{month}</Text>
              <Text style={styles.slash}> / </Text>
              <Text style={styles.dmy}>{year}</Text>
            </TouchableOpacity>
          </View>
          {show ? (
            <DateTimePicker
              display="default"
              onChange={onChange}
              value={date}
            />
          ) : null}
        </View>
        <View style={{ width: "100%", marginTop: 80 }}></View>
        <BottomComponent
          navigation={navigation}
          next={"OriginFormComponent"}
          errMess={showErr}
          onClick={() => {
              closeErr()
              dispatch(getBirthday(birthday))
          }}
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
  containerDate: {
    flex: 2,
  },
  birthdaySelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dmy: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#ccc",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  slash: {
    fontSize: 18,
    color: "white",
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    position: "relative",
    width: '100%'
  },
  iconBack: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
export default BirthdayFormComponent;
