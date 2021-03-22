// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import React from "react";
// // import { NavigationContainer } from "@react-navigation/native";
// import {View, Text} from 'react-native';

// const App =  () => {
//   return (
//     <View>
// <MaterialIcons name="home-filled" size={24} color={'black'} />

//       <Text>Helsdfsdlo</Text>
//     </View>
//   )
// };


// export default App;


import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import BottomTabNavigator from './src/navigation/bottomTabNavigator';
import { useSelector } from 'react-redux';
import SignUpScreen from './src/screens/SignUpScreen';

// REDUX
import { Provider } from 'react-redux'
import store from './src/redux/store';


const App = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {token ? <BottomTabNavigator/> : <SignUpScreen /> }
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};


export default () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}
