// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import SavedWalksScreen from './src/screens/SavedWalksScreen';
import WalkDetailsScreen from './src/screens/WalkDetailsScreen';
import BottomTabOptions from './src/navigations/BottomTabOptions';
import { CustomHeaderOptions } from './src/navigations/CustomHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) =>
        CustomHeaderOptions({
          title: 'Home',
          navigation,
          showBackButton: false,
        })
      }
    />
  </Stack.Navigator>
);

// Stack for SavedWalks
const SavedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SavedWalks"
      component={SavedWalksScreen}
      options={({ navigation }) =>
        CustomHeaderOptions({
          title: 'Saved Walks',
          navigation,
          showBackButton: false,
        })
      }
    />
  </Stack.Navigator>
);

// Tabs now contain nested stacks
const BottomTabs = () => (
  <Tab.Navigator screenOptions={({ route }) => BottomTabOptions(route)}>
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
    <Tab.Screen name="SavedTab" component={SavedStack} options={{ title: 'Saved' }} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="WalkDetails"
          component={WalkDetailsScreen}
          options={({ navigation }) =>
            CustomHeaderOptions({
              title: 'Walk Details',
              navigation,
              showBackButton: true,
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
