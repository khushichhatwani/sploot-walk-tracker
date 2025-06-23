import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapComponent from '../components/MapComponent';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type WalkDetailsRouteProp = RouteProp<RootStackParamList, 'WalkDetails'>;

const WalkDetailsScreen = () => {
  const route = useRoute<WalkDetailsRouteProp>();
  const { walk } = route.params;

  const startLocation = walk.coordinates[0];

  const formatDuration = (durationMs: number) => {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <View style={{ flex: 1 }}>
      <MapComponent coordinates={walk.coordinates} currentLocation={startLocation} />

      <View style={styles.detailsContainer}>
      <View style={styles.detailRow}>
        <Text style={styles.label}>🕒 Duration:</Text>
        <Text style={styles.value}>{formatDuration(walk.duration)}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>📅 Date:</Text>
        <Text style={styles.value}>{new Date(walk.timestamp).toLocaleString()}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>📍 Points Recorded:</Text>
        <Text style={styles.value}>{walk.coordinates.length}</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 6,
    borderBottomWidth: 0.6,
    borderColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default WalkDetailsScreen;
