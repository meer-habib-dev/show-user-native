import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Info from "./Info";
import StorySlider from "./StorySlider";

const User = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 130, height: 130, borderRadius: 30, marginTop: -60 }}
        source={require("../../../../assets/model.jpg")}
      />

      <View>
        <Info />
      </View>
      <View>
        <StorySlider />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -40,
  },
});
