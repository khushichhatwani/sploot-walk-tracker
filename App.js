import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";;
import SplashScreen from './screens/ScheduleScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import BottomTabOptions from './navigations/BottomTabOptions';
import ProfileScreen from './screens/ProfileScreen';
import CustomHeader from './navigations/CustomHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookingScreen from './screens/BookingScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ScheduleTab"
      screenOptions={({ route }) => BottomTabOptions(route)}
    >
      <Tab.Screen
        name="ScheduleTab" 
        component={ScheduleScreen}
        options={({ route,navigation }) => CustomHeader({navigation, title: 'Schedule' })}
      />
       <Tab.Screen
        name="BookingTab" 
        component={BookingScreen}
        options={({route, navigation }) => CustomHeader({navigation, title: 'Bookings' })}
      />
       <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={({ route,navigation }) => CustomHeader({navigation, title: 'Profile' })}
      />
      
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogInScreen"
    >
      <Stack.Screen
       name="LogInScreen"
       component={SignInScreen}
       options={({ navigation }) => 
        CustomHeader({ 
          navigation, 
          title: "Log In",
          showIcon : false 
         })}
        />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationsScreen}
        options={({ navigation }) =>
          CustomHeader({
            
            navigation,
            title: "Notifications",
            showIcon :true 
            
          })
        }
      />
 
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
    <RootNavigator/>
  </NavigationContainer>
  );
}

