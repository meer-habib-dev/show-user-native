import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../utils/config/colors";
import { FontAwesome } from "@expo/vector-icons";
import ProfileScreen from "../Screens/ProfileScreen";
import LifeStyleScreen from "../Screens/LifeStyleScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";

const Screens = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 22,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="home"
                size={24}
                color={focused ? "orange" : "black"}
              />
              <Text style={{ color: focused ? "orange" : "black" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LifeStyle"
        component={LifeStyleScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Lifestyle",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="style"
                size={24}
                color={focused ? "orange" : "black"}
              />
              <Text style={{ color: focused ? "orange" : "black" }}>
                Lifestyle
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="users"
                size={24}
                color={focused ? "orange" : "black"}
              />
              <Text style={{ color: focused ? "orange" : "black" }}>User</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Screens;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
