import { View, Text, Image } from "react-native";
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
          // height: "100%",
        }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public" }}
            style={{
              alignSelf: "center",
              height: 100,
              width: 100,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            User Name
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 10,
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
        </View>
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
