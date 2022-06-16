import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../../../components/Card";

const ImageGallery = () => {
  const imageCollection = [
    {
      id: 1,
      aspectRatio: 150 / 200,
      color: "black",
      image: require("../../../../assets/1.jpg"),
    },
    {
      id: 2,
      aspectRatio: 1,
      color: "black",
      image: require("../../../../assets/2.jpg"),
    },
    {
      id: 3,
      aspectRatio: 120 / 100,
      color: "black",
      image: require("../../../../assets/3.jpg"),
    },
    {
      id: 4,
      aspectRatio: 200 / 150,
      color: "black",
      image: require("../../../../assets/4.jpg"),
    },
    {
      id: 5,
      aspectRatio: 375 / 400,
      color: "black",
      image: require("../../../../assets/5.jpg"),
    },
    {
      id: 6,
      aspectRatio: 500 / 400,
      color: "black",
      image: require("../../../../assets/6.jpg"),
    },
    {
      id: 7,
      aspectRatio: 700 / 500,
      color: "black",
      image: require("../../../../assets/7.jpg"),
    },
    {
      id: 8,
      aspectRatio: 1,
      color: "black",
      image: require("../../../../assets/8.jpg"),
    },
    {
      id: 9,
      aspectRatio: 120 / 150,
      color: "black",
      image: require("../../../../assets/9.jpg"),
    },
    {
      id: 10,
      aspectRatio: 350 / 300,
      color: "black",
      image: require("../../../../assets/10.jpg"),
    },
    {
      id: 11,
      aspectRatio: 350 / 500,
      color: "black",
      image: require("../../../../assets/11.jpg"),
    },
  ];

  return (
    <View style={{}}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={{ alignItems: "center", marginRight: 5 }}>
            {imageCollection
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => (
                <Card
                  key={index}
                  //   width={width}
                  color={item.color}
                  image={item.image}
                  aspectRatio={item.aspectRatio}
                />
              ))}
          </View>
          <View style={{ marginLeft: 5 }}>
            {imageCollection
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => (
                <Card
                  key={index}
                  //   width={width}
                  color={item.color}
                  image={item.image}
                  aspectRatio={item.aspectRatio}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
