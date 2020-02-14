import React from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Track Create Screen</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
