import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

interface CustomHeaderOptionsProps {
  title: string;
  navigation: any;
  showBackButton?: boolean;
}

export const CustomHeaderOptions = ({
  title,
  navigation,
  showBackButton = false,
}: CustomHeaderOptionsProps): NativeStackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitle: () => (
    <View style={styles.titleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  ),
  headerLeft: () =>
    showBackButton ? (
      <TouchableOpacity style={styles.iconContainer} onPressOut={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={26} color="#000" />
      </TouchableOpacity>
    ) : null,
  headerStyle: {
    backgroundColor: '#fff',
  },
});

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconContainer: {
    paddingHorizontal: 4,
    marginLeft: 4,
  },
});
