import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

type IconName =
  | 'home'
  | 'home-outline'
  | 'calendar'
  | 'calendar-outline';

const BottomTabOptions = (route: RouteProp<any, any>): BottomTabNavigationOptions => {
  let iconName: IconName = 'home';

  if (route.name === 'HomeTab') {
    iconName = 'home';
  } else if (route.name === 'SavedTab') {
    iconName = 'calendar';
  }

  return {
    tabBarLabelStyle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 10,
    },
    tabBarIcon: ({ focused, color }) => {
      const selectedIcon: IconName =
        route.name === 'HomeTab'
          ? focused
            ? 'home'
            : 'home-outline'
          : route.name === 'SavedTab'
          ? focused
            ? 'calendar'
            : 'calendar-outline'
          : 'home'; // fallback

      return <MaterialCommunityIcons name={selectedIcon} size={26} color={color} />;
    },
    tabBarActiveTintColor: '#9B4DCA',
    tabBarInactiveTintColor: 'grey',
    headerShown: false,
  };
};

export default BottomTabOptions;
