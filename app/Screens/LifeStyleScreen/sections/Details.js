import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const Details = () => {
  const followers = [
    {
      image: require("../../../../assets/user1.jpg"),
    },
    {
      image: require("../../../../assets/user2.jpg"),
    },
    {
      image: require("../../../../assets/user3.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.followButton}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Follow</Text>
      </TouchableOpacity>
      <Text style={styles.textContent}>
        The women the you are watching on screen, is so beautiful. I just
        crushed on her beauty at midnight and from then im out of sleep. Life is
        so freaking beautiful, no matter if you are in pain or happiness, It
        just asesome to have a life to live on. Enjoy every moment that you can
        live
      </Text>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "gray",
          marginVertical: 20,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.lIcontainer}>
          <FontAwesome
            name="user"
            size={24}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text>20 Friend</Text>
            <Text>Following this</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {followers.map((follower, index) => (
            <Image
              key={index}
              source={follower.image}
              style={styles.followrImage}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
  },
  textContent: {
    color: "black",
    marginTop: 10,
  },
  followButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    position: "absolute",
    right: 50,
    top: -18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  lIcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  imageContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  followrImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    // marginHorizontal: 10,
  },
});
