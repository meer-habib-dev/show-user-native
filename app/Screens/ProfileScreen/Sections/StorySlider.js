import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRef } from "react";

const StorySlider = () => {
  let flatListRef = useRef(null);
  const slides = [
    {
      image: require("../../../../assets/1.jpg"),
    },
    {
      image: require("../../../../assets/2.jpg"),
    },
    {
      image: require("../../../../assets/3.jpg"),
    },
    {
      image: require("../../../../assets/4.jpg"),
    },
  ];
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Stories</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={slides}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
      />
    </View>
  );
};

export default StorySlider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  carousel: {
    maxHeight: 300,
  },
  image: {
    width: 170,
    height: 220,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
