import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils/config/colors";

const AppButton = ({ title, style, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.Button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingVertical: 5,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginVertical: 10,
  },
  Text: {
    // fontSize: 18,
    color: "#fff",
  },
});
