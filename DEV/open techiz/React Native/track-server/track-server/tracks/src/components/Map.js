import React, { useContext }from 'react';
import { Text, StyleSheet, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MapView, { Polyline, Circle }from 'react-native-maps';
import { Context as LocationContext} from '../context/LocationContext'


const Map = () => {
    const { state: {currentLocation} } = useContext(LocationContext);
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200}}/>;
    }
    // console.log(state);
// let points = [];
// for (let i = 0; i < 20; i++) {
//     if(i % 2 === 0){
//         points.push({
//             latitude: 21.626210457699926 + i * 0.001,
//             longitude: 105.01872062863879 + i * 0.001
//         });
//     }
//     else {
//         points.push({
//             latitude: 21.626210457699926 + i * 0.002,
//             longitude: 105.01872062863879 + i * 0.001
//         });
//     }
//     }

    return <MapView 
    style={styles.map}
    initialRegion={{
        ...currentLocation.coords,
        // latitude: 21.626210457699926,
        // longitude: 105.01872062863879,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    region={{
        ...currentLocation.coords,
        // latitude: 21.626210457699926,
        // longitude: 105.01872062863879,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
     >
         <Circle 
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
         />

         {/* <Polyline coordinates={points}/> */}
     </MapView>
} 

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;