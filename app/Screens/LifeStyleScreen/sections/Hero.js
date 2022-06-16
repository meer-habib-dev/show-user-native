import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Hero = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require("../../../../assets/hero.jpg")}
        style={styles.image}
      >
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconContainer}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="orange"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Life Style</Text>
          <Text style={styles.subTitle}>@LifeStyle</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
  },
  icon: {
    // position: "absolute",
    // right: 30,
    // top: 40,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    // flexDirection:/ "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    color: "white",
  },
  subTitle: {
    color: "white",
  },
});
