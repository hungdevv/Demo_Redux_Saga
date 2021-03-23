import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DecouvriScreen from '../screens/DecouvriScreen';
import SettingScreen from '../screens/SettingScreen';
import MessScreen from '../screens/MessScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#157cdb',
            inactiveTintColor: '#262626',
      }}
    >
      <Tab.Screen 
      name="DecouvriScreen" 
      component={DecouvriScreen}
      options={{
        tabBarLabel: 'Decouvri',
        tabBarIcon: ({color}) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
        ),
      }}
       />
        <Tab.Screen 
      name="Message" 
      component={MessScreen}
      options={{
        tabBarLabel: 'Message',
        tabBarIcon: ({color}) => (
            <MaterialIcons name="message" size={24} color={color} />
        ),
      }}
       />
      <Tab.Screen 
        name="SettingScreen" 
        component={SettingScreen} 
        options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color}) => (
                <MaterialIcons name="settings" size={24} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;