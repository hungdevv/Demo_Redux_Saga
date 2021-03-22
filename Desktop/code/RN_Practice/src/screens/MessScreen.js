import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>MessScreen</Text>
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
})

export default MessScreen;