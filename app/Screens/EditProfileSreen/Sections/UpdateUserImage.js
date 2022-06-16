import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const UpdateUserImage = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 100,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            zIndex: -1,
          }}
          source={require("../../../../assets/7.jpg")}
        />
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.7,
            zIndex: 1,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="camera" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpdateUserImage;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
  },
});
