import { View, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ErrComponent from '../components/ErrComponent';
import React, {useState} from 'react';

const BottomComponent = ({navigation, next, onClick, data, errMess}) => {
    const [err, showErr] = useState(false);
    return (
        <View style={{width: '100%', alignItems: 'center'}}>
            {err ? <ErrComponent err={() => showErr(false)}/> : null}  
          <View style={styles.boxBorder}>
            <View style={styles.boxItem}>
            <AntDesign
              onPress={() => {
                onClick()
                if(errMess) {
                  showErr(true)
                }
                else{
                  showErr(false)
                  navigation.navigate(next, data)
                }
              }}
              name="check"
              size={24}
              color="white"
            /> 
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  boxBorder: {
    borderRadius: 40, 
    height: 40, 
    width: 40, 
    position: 'relative',
    marginBottom: 8,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderColor: 'white'
  },
  boxItem: {
    position: 'absolute', 
    top: 8, 
    right: 8
  }
})

export default BottomComponent;