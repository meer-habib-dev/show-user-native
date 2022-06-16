import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Impression = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>256k Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.photo}>325 Photos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>56 Collections</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Impression;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  photo: {
    fontWeight: "bold",
  },
});
