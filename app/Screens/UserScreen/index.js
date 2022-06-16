import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import NavigationHeader from "./sections/NavigationHeader";
import UserInfo from "./sections/UserInfo";
import Impression from "./sections/Impression";
import ImageGallery from "./sections/ImageGallery";

const UserScreen = () => {
  const [userData, setUserData] = useState([]);
  const route = useRoute();
  const { userID } = route.params;

  useEffect(() => {
    const getMoviesFromApi = async () => {
      try {
        let response = await fetch(
          `https://dummyapi.io/data/v1/user/${userID}`,
          {
            headers: {
              "app-id": `62a9a9261f59847dc960fc9a`,
            },
          }
        );
        let responseJson = await response.json();
        setUserData(responseJson);

        // return responseJson;
      } catch (error) {
        console.error("getting", error);
      }
    };
    getMoviesFromApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* NavigationHeader */}
      <NavigationHeader />
      {/* User Profile */}
      <UserInfo data={userData} />
      {/* ImpresssSection */}
      <Impression />
      {/* Image Gallery / Masonry */}
      <ImageGallery />
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    // backgroundColor: "white",
  },
});
