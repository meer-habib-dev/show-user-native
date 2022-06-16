import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ color, image, aspectRatio }) => {
  const wwidth = Dimensions.get("window").width / 2.35;
  const a = "../../assets/1.jpg";
  return (
    <Image
      style={{
        // backgroundColor: color,
        width: wwidth,
        marginBottom: 10,
        borderRadius: 10,
        height: wwidth * aspectRatio,
      }}
      source={image}
      resizeMode="cover"
    />
  );
};

export default Card;
const styles = StyleSheet.create({});
