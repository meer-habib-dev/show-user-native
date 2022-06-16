import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../utils/config/colors";
import { useNavigation } from "@react-navigation/native";
const NavigationHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navHeadContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text>Back</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => alert("Changes are being updated")}>
          <Text style={styles.text}> Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  navHeadContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: -5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
