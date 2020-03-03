import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop recording" onPress={stopRecording} />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
        <Spacer>
          {!recording && locations.length ? (
            <Button title="Save Recording" />
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

export default TrackForm;
