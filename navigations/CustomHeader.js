import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomHeader = ({ title,navigation, showIcon = true }) => {
    // console.log(title)
    return {
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitle: () => {
          return (
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>
          );
        },
        headerRight: () => (
            showIcon ? (
                <TouchableOpacity style={styles.iconContainer}
                  onPress={() => navigation.navigate('NotificationScreen')}>
                  <MaterialCommunityIcons name="bell" size={28} color="white" />
                </TouchableOpacity>
              ) : null
          ),
        headerStyle: {
            backgroundColor: '#92C93D', 
          },
        
      };
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 0,
    backgroundColor: '#6200EE',
    alignItems: 'center',
  },
 
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff", 
    textAlign: "center",
  },
  iconContainer: {
    paddingHorizontal: 10,
    marginRight:14
  },
});

export default CustomHeader;
