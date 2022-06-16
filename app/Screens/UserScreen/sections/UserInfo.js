import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

const UserInfo = ({ data }) => {
  const { picture, firstName, title, phone, location, email } = data;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            marginTop: 10,
            marginRight: 20,
            resizeMode: "contain",
          }}
          source={{ uri: picture }}
        />
      </View>
      <View>
        <View>
          <Text style={styles.name}>{title + " " + firstName}</Text>
          <Text style={styles.address}>
            {location?.city + ", " + location?.country}
          </Text>
          <Text style={styles.email}>{email}</Text>
          {/* <Text style={styles.phone}>{phone}</Text> */}
        </View>
        <View>
          <AppButton
            title={"Edit My Profile"}
            onPress={() => navigation.navigate("EditMyProfile")}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    // color: "",
  },
  address: {
    // fontWeight: "bold",
    color: "gray",
  },
  email: {
    // fontWeight: "bold",
    color: "gray",
  },
  phone: {
    fontWeight: "bold",
    color: "gray",
  },
});
