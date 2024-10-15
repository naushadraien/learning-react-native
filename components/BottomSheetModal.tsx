import React, { PropsWithChildren } from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface BottomModalProps extends ModalProps {
  visible: boolean;
  onClose: () => void;
  modalContentHeight?: number;
}

export default function BottomSheetModal({
  onClose,
  visible,
  children,
  animationType = "slide",
  modalContentHeight = 50,
  ...rest
}: BottomModalProps & PropsWithChildren) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType={animationType}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={[
                styles.modalContent,
                {
                  height: `${modalContentHeight}%`,
                },
              ]}
            >
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    width: "100%",
  },
});
