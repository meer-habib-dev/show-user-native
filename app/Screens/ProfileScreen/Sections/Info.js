import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Info = () => {
  return (
    <View>
      <View>
        <Text style={styles.name}>Billy Gomez</Text>
        <Text style={styles.address}>New York , USA</Text>
      </View>
      <View style={styles.followerContainer}>
        <View style={styles.fContainer}>
          <Text style={styles.number}>1208</Text>
          <Text style={styles.follower}>Followers</Text>
        </View>
        <View style={styles.fContainer}>
          <Text style={styles.number}>380</Text>
          <Text style={styles.follower}>Followings</Text>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  address: {
    color: "gray",
    textAlign: "center",
    marginBottom: 15,
  },
  followerContainer: {
    flexDirection: "row",
  },
  fContainer: {
    marginHorizontal: 20,
  },
  number: {
    color: "#808080",
    fontWeight: "bold",
    textAlign: "center",
  },
  follower: {
    color: "#808080",
  },
});
