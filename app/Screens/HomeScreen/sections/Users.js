import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Users = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("UserScreen", {
          userID: item.id,
        })
      }
      style={[styles.userContainer, styles.shadowProp]}
    >
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 5,
            marginRight: 20,
            resizeMode: "contain",
          }}
          source={{ uri: item.picture }}
        />
      </View>
      <View>
        <Text>User Title : {item.title}</Text>
        <Text>User Name : {item.firstName}</Text>
        <Text>User Status : Fake User</Text>
        <Text>Task Provider : Tanvir Boss</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Users;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",

    alignItems: "center",
    // justifyContent: 'center',
    boxShadow: 1,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,

    margin: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
