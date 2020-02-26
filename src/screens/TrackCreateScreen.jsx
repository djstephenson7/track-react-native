import React, { useCallback, useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [error] = useLocation(isFocused, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services.</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);
