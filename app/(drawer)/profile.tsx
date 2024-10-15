import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BottomSheetModal from "@/components/BottomSheetModal";

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 50,
          }}
          onPress={() => setOpenModal(true)}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Open Button Modal
          </Text>
        </TouchableOpacity>
      </View>
      {openModal && (
        <BottomSheetModal
          visible={openModal}
          onClose={() => setOpenModal(false)}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </BottomSheetModal>
      )}
    </React.Fragment>
  );
};

export default ProfilePage;
