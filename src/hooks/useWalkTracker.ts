// hooks/useWalkTracker.ts
import { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import { Walk } from '../types/walk';

export const useWalkTracker = () => {
  const [walking, setWalking] = useState(false);
  const [coordinates, setCoordinates] = useState<Walk['coordinates']>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [duration, setDuration] = useState(0);

  const locationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initial location fetch
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setCurrentLocation(loc.coords);
      }
    })();
  }, []);

  // Walk duration timer
  useEffect(() => {
    if (walking && startTime) {
      timerIntervalRef.current = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [walking, startTime]);

  // Walk GPS tracking
  useEffect(() => {
    if (walking) {
      locationIntervalRef.current = setInterval(async () => {
        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setCoordinates(prev => [...prev, loc.coords]);
        setCurrentLocation(loc.coords);
      }, 5000);
    } else if (locationIntervalRef.current) {
      clearInterval(locationIntervalRef.current);
    }

    return () => {
      if (locationIntervalRef.current) clearInterval(locationIntervalRef.current);
    };
  }, [walking]);

  const startWalk = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Location permission denied');
    }
    const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setWalking(true);
    setStartTime(Date.now());
    setCoordinates([loc.coords]);
    setCurrentLocation(loc.coords);
    setDuration(0);
  };

  const stopWalk = () => {
    setWalking(false);
  };

  const resetWalk = () => {
    setWalking(false);
    setStartTime(null);
    setCoordinates([]);
    setDuration(0);
  };

  return {
    walking,
    currentLocation,
    coordinates,
    duration,
    startWalk,
    stopWalk,
    resetWalk,
  };
};
