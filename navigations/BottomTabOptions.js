import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTabOptions = (route) => {
  return {
    tabBarLabelStyle: {
      fontFamily: "Poppins_500Medium",
      fontSize: 10,
    },
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "ScheduleTab") {
        iconName = focused ? "book" : "book-outline";
      } 
      else if (route.name === "BookingTab") {
        iconName = focused ? "calendar" : "calendar-outline";
      }
      else if (route.name === "ProfileTab") {
        iconName = focused ? "account" : "account-outline";
      }

      return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
    },
    tabBarActiveTintColor: "#9B4DCA", 
    tabBarInactiveTintColor: "grey", 
    headerShown: false,
  };
};

export default BottomTabOptions;