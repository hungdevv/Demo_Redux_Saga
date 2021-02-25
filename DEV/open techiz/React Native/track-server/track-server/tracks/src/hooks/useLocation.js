import {useEffect, useState } from 'react';
import { 
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

export default (callback) => {
    const [err, serErr] = useState(null);
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, callback
        );
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };
      useEffect(() => {
        startWatching();
      }, []);

      return [err];
};