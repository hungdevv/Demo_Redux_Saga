import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused}) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });
  return(
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a map</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
