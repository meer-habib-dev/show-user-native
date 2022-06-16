import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserHero from "./Sections/UserHero";
import User from "./Sections/User";
import StorySlider from "./Sections/StorySlider";

const ProfileScreen = () => {
  return (
    <View>
      {/* HeroSection */}
      <UserHero />
      {/* User */}
      <User />
      {/* story slider */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
