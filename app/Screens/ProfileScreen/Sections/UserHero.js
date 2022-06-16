import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserHero = () => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 300 }}
        source={require("../../../../assets/user-hero.jpg")}
      />
    </View>
  );
};

export default UserHero;

const styles = StyleSheet.create({});
