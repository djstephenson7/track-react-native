import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [error] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>Track Create Screen</Text>
      <Map />

      {error ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);
