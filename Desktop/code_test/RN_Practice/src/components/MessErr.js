import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MessErrFunc = ({err}) => (
    <View style={styles.boxMessErr}>
      <Text style={{color: 'white', textAlign: 'center'}}>
        {err}
       </Text>
    </View>
  )

const styles = StyleSheet.create({
    boxMessErr: {
        position: 'absolute',
        bottom: -34,
        backgroundColor: 'red',
        width: '100%',
        height: 30
      },
})

export default MessErrFunc;