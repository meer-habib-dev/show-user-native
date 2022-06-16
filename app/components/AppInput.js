import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AppInput = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, borderRadius: 4, marginTop: 10 }}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
