import React from 'react';
import MapView, { Marker, Polyline, LatLng } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

interface MapComponentProps {
  coordinates: LatLng[]; // array of latitude/longitude points
  currentLocation?: LatLng; // current location
}

const MapComponent: React.FC<MapComponentProps> = ({ coordinates, currentLocation }) => {
  if (!currentLocation) return null;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation={true} 
     followsUserLocation={true}

    >
      {/* Draw path */}
      {coordinates.length > 1 && (
        <Polyline
          coordinates={coordinates}
          strokeColor="#9B4DCA"
          strokeWidth={4}
        />
      )}

      {coordinates.length > 0 && (
        <>
          {/* Start Marker */}
          <Marker
            coordinate={coordinates[0]}
            title="Start"
            pinColor="green"
          />

          {/* End Marker */}
          <Marker
            coordinate={coordinates[coordinates.length - 1]}
            title="End"
            pinColor="green"
          />
        </>
      )}

      {currentLocation && (
    <Marker
      coordinate={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude
      }}
      title="You are here"
      pinColor="red"
    />
  )}

    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapComponent;
