import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import TabLayout from "../(tabs)/_layout";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={({ navigation }) => ({
          drawerPosition: "right",
          drawerType: "slide", // Ensure smooth sliding animation
          overlayColor: "rgba(0, 0, 0, 0.5)", // Add overlay for better visual effect
          drawerStyle: {
            width: 250, // Customize drawer width
          },
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons
                name="menu"
                size={24}
                color="black"
                style={{
                  paddingHorizontal: 16,
                }}
              />
            </TouchableOpacity>
          ),
          swipeEnabled: false,
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: "#5363df",
          drawerActiveTintColor: "#fff",
          drawerLabelStyle: { marginLeft: -20 },
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerTitle: "",
            drawerLabel: "Tabs",
            // drawerStyle: { display: "none" },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerTitle: "",
            drawerLabel: "Profile",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="news"
          options={{
            headerTitle: "",
            drawerLabel: "News",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
