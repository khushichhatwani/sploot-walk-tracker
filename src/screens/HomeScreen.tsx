import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet, Dimensions, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocationPermission } from '../services/locationService';
import MapComponent from '../components/MapComponent';
import { Walk } from '../types/walk';
import { useWalkTracker } from '../hooks/useWalkTracker';

const { width, height } = Dimensions.get('window');

// UUID generator
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const HomeScreen = () => {
const {
  walking,
  currentLocation,
  coordinates,
  duration,
  startWalk,
  stopWalk,
  resetWalk,
} = useWalkTracker();


  
  const handleStartStop = async () => {
  if (walking) {
    try {
      const walkDuration = duration * 1000; // duration in ms
      if (coordinates.length === 0) {
        Alert.alert('No Data', 'No location data was recorded for this walk.');
        resetWalk();
        return;
      }

      const walk: Walk = {
        id: generateUUID(),
        coordinates,
        duration: walkDuration,
        timestamp: Date.now(),
      };

      const existing = await AsyncStorage.getItem('walks');
      const prevWalks = existing ? JSON.parse(existing) : [];
      await AsyncStorage.setItem('walks', JSON.stringify([...prevWalks, walk]));
      
      Alert.alert('Success', 'Walk saved successfully!');
      resetWalk();
    } catch (err) {
      Alert.alert('Error', 'Failed to save walk.');
    }
  } else {
    try {
      await startWalk();
    } catch (err) {
      Alert.alert('Permission Required', 'Location access is needed to start the walk.');
    }
  }
};

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapComponent 
          coordinates={coordinates}
          currentLocation={currentLocation ?? undefined}
        />
        
        {/* Overlay Stats */}
        {walking && (
          <View style={styles.statsOverlay}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{formatTime(duration)}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{coordinates.length}</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>
          </View>
        )}
      </View>

      {/* Bottom Control Panel */}
      <View style={styles.controlPanel}>
        {/* Status Indicator */}
        <View style={styles.statusContainer}>
                      <View style={[styles.statusDot, { backgroundColor: walking ? '#10b981' : '#9ca3af' }]} />
          <Text style={styles.statusText}>
            {walking ? 'Recording Walk' : 'Ready to Walk'}
          </Text>
        </View>

        {/* Main Action Button */}
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: walking ? '#ef4444' : '#10b981',
              opacity: (walking && coordinates.length === 0) ? 0.6 : 1
            }
          ]}
          onPress={handleStartStop}
          disabled={walking && coordinates.length === 0}
          activeOpacity={0.8}
        >
          <View style={styles.buttonContent}>
            <View style={[styles.buttonIcon, { 
              backgroundColor: walking ? '#fff' : '#000' 
            }]}>
              {walking ? (
                <View style={styles.stopIcon} />
              ) : (
                <View style={styles.playIcon} />
              )}
            </View>
            <Text style={[styles.buttonText, { 
              color: '#ffffff'
            }]}>
              {walking ? 'Stop Walk' : 'Start Walk'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Walking Stats */}
        {walking && (
          <View style={styles.walkingStats}>
            <Text style={styles.walkingStatsText}>
              🚶‍♂️ Keep your phone with you while walking
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  statsOverlay: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    color: '#2563eb',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 12,
    marginTop: 2,
  },
  controlPanel: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 34,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  actionButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  playIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 0,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftColor: '#ffffff',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 1,
  },
  stopIcon: {
    width: 8,
    height: 8,
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  walkingStats: {
    alignItems: 'center',
  },
  walkingStatsText: {
    color: '#6b7280',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default HomeScreen;