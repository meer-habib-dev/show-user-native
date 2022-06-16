import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppInput from "../../../components/AppInput";
import AppButton from "../../../components/AppButton";

const UserInput = () => {
  return (
    <View>
      <AppInput label={"Name"} />
      <AppInput label={"Hometown"} />
      <AppInput label={"Email"} />
      <AppInput label={"Number"} />
      <AppInput label={"Country"} />
      <AppButton title={"Confirm Updates"} style={styles.button} />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 10,
  },
});
