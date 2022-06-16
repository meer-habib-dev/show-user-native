import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Hero from "./sections/Hero";
import Details from "./sections/Details";

const LifeStyleScreen = () => {
  return (
    <View>
      {/* hero */}
      <Hero />
      {/* details */}
      <Details />
      {/* followings */}
    </View>
  );
};

export default LifeStyleScreen;

const styles = StyleSheet.create({});
