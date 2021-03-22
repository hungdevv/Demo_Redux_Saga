import { createStackNavigator } from "@react-navigation/stack";
import BirthdayFormComponent from '../components/BirthdayFormComponent';
import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "./HomeScreen";
import SignInScreen from "./SignInScreen";
import EntityFormComponent from '../components/EntityFormComponent';
import OriginFormComponent from '../components/OriginFormComponent';
import FromFormComponent from '../components/FromFormComponent';
import CountryFormComponent from '../components/CountryFormComponent'
import RegionFormComponent from '../components/RegionFormComponent'
import ZipCodeFormComponent from '../components/ZipCodeFormComponent';
import CityFormComponent from '../components/CityFormComponent';
import SignUpFormComponent from '../components/SignupFormComponent';

const Stack = createStackNavigator();

const SignUpScreen = () => {
    return (
        <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="EntityFormComponent" component={EntityFormComponent} />
          <Stack.Screen name="OriginFormComponent" component={OriginFormComponent} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="BirthdayFormComponent" component={BirthdayFormComponent} />
          <Stack.Screen name="FromFormComponent" component={FromFormComponent} />
          <Stack.Screen name="CountryFormComponent" component={CountryFormComponent} />
          <Stack.Screen name="RegionFormComponent" component={RegionFormComponent} />
          <Stack.Screen name="ZipCodeFormComponent" component={ZipCodeFormComponent} />
          <Stack.Screen name="CityFormComponent" component={CityFormComponent} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignUpFormComponent" component={SignUpFormComponent} />
        </Stack.Navigator>
      );
};

export default SignUpScreen;
