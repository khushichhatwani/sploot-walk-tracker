import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const notifications = [
    { id: '1', title: 'YBooking #DRHA8 - At learning center- monthly plan-starter family- 1-2 days-approved' },
    { id: '2', title: 'YBooking #DRHA8 - At learning center- monthly plan-starter family- 1-2 days-approved' },
  
  ];
  
  const NotificationsScreen = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="grey" />
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    itemText: {
      fontSize: 18,
      fontWeight: '500',
    },
    separator: {
      height: 1,
      backgroundColor: '#E0E0E0',
      marginHorizontal: 20,
    },
  });

export default NotificationsScreen;
