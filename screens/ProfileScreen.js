import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = [
  { id: '1', title: 'Profile' },
  { id: '2', title: 'Invoices' },
  { id: '3', title: 'Kids' },
  { id: '4', title: 'About Us' },
  { id: '5', title: 'Terms & Conditions' },
  { id: '6', title: 'Logout' },
  { id: '7', title: 'Close Account' },
];

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      "Are you sure?",
      "Do you really want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.replace("LogInScreen");
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={item.title === 'Logout' || item.title === 'Close Account' ? handleLogout : null}
    >
      <Text style={styles.itemText}>{item.title}</Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="grey" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
    fontWeight:500
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
});

export default ProfileScreen;
