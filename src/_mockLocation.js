import * as Location from 'expo-location';

const tenMetresWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 100000,
    coords: {
      latitude: 37.33233141 + increment * tenMetresWithDegrees,
      longitude: -122.0312186 + increment * tenMetresWithDegrees,
      altitude: 5,
      accuracy: 5,
      heading: 0,
      speed: 0
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
