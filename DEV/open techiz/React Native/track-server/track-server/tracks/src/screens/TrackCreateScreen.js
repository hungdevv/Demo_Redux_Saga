import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);
  // const [err, serErr] = useState(null);
  // const startWatching = async () => {
  //   try {
  //     const { granted } = await requestPermissionsAsync();
  //     await watchPositionAsync({
  //       accuracy: Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     }, (location) => {
  //       addLocation(location);
  //     });
  //     if (!granted) {
  //       throw new Error('Location permission not granted');
  //     }
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };

  // useEffect(() => {
  //   startWatching();
  // }, []);
  return(
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a map</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
