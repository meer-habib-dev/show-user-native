import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UpdateUserImage from "./Sections/UpdateUserImage";
import UserInput from "./Sections/UserInput";
import NavigationHeader from "../UserScreen/sections/NavigationHeader";

const EditMyProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <NavigationHeader />
      {/* Update User Image */}
      <UpdateUserImage />
      {/* Input Section */}
      <UserInput />
    </SafeAreaView>
  );
};

export default EditMyProfile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
