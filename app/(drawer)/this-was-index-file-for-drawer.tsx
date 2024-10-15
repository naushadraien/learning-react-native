//This file was the index.tsx file for the drawer which overWrites tabs layout
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DrawerPage = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
          backgroundColor: "black",
        }}
        onPress={toggleDrawer}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Toggle Drawer
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DrawerPage;
