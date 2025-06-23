import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Walk } from '../types/walk';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SavedWalks'>;

const { width } = Dimensions.get('window');

// Duration formatting function
const formatDuration = (durationMs: number) => {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
};


const SavedWalksScreen = () => {
  const [walks, setWalks] = useState<Walk[]>([]);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchWalks = async () => {
      const data = await AsyncStorage.getItem('walks');
      if (data) setWalks(JSON.parse(data));
    };
    const unsubscribe = navigation.addListener('focus', fetchWalks);
    return unsubscribe;
  }, [navigation]);

  const renderWalkItem = ({ item }: { item: Walk }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('WalkDetails', { walk: item })}
      style={styles.card}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="walk" size={28} color="#9B4DCA" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>
          {new Date(item.timestamp).toLocaleString()}
        </Text>
        <Text style={styles.durationText}>
          Duration: {formatDuration(item.duration)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={walks}
        keyExtractor={(item) => item.id}
        renderItem={renderWalkItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No walks recorded yet 🐾</Text>
        }
        contentContainerStyle={
          walks.length === 0 ? styles.emptyContainer : undefined
        }
      />
    </View>
  );
};

export default SavedWalksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    backgroundColor: '#F0E8F9',
    borderRadius: 50,
    padding: 12,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  durationText: {
    fontSize: 14,
    color: '#777',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 100,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
