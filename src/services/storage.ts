import AsyncStorage from '@react-native-async-storage/async-storage';
import { Walk } from '../types/walk';

const WALKS_KEY = 'WALKS_DATA';

export async function saveWalk(walk: Walk) {
  const data = await AsyncStorage.getItem(WALKS_KEY);
  const walks: Walk[] = data ? JSON.parse(data) : [];
  walks.push(walk);
  await AsyncStorage.setItem(WALKS_KEY, JSON.stringify(walks));
}

export async function getWalks(): Promise<Walk[]> {
  const data = await AsyncStorage.getItem(WALKS_KEY);
  return data ? JSON.parse(data) : [];
}
