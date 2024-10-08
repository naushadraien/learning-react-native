import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const router = useRouter();
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: "#dde3fe",
          height: "100%",
        }}
      >
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Logout"}
          onPress={() => {
            router.replace("/");
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
        />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#dde3fe",
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}
