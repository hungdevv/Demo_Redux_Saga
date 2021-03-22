import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

const SettingScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>SettingScreen</Text>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.bottom}
          mode="contained"
          onPress={() => {
            dispatch({ type: 'SIGNOUT' });
            console.log('click.....')
          }} 
        >
          <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
textContent: {
    fontSize: 30,
    top: 20 },
container: {
    flex: 1,
    top: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
      backgroundColor: 'blue',
      borderRadius: 4,
      height: 40,
      width: 80,
    justifyContent: 'center'
  },
  text: {
      textAlign: 'center',
      color: 'white'
  }
});

export default SettingScreen;