import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      <View style={styles.userDataContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              marginTop: 10,
              marginRight: 20,
              resizeMode: "contain",
            }}
            source={{ uri: userData?.picture }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            // onPress={}
            style={styles.buttonC}
            title="Contact"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

          <Button
            // onPress={onPressLearnMore}
            title="Message"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <TouchableOpacity style={styles.userInfo}>
          <Text style={{ marginRight: 20 }}>Name:</Text>
          <Text>
            {userData?.title} {userData?.firstName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text style={{ marginRight: 20 }}>Email:</Text>
          <Text>{userData?.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>Phone:</Text>
          <Text>{userData?.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text style={{ marginRight: 20 }}>Date of birth:</Text>
          <Text>{userData?.dateOfBirth}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>Gender:</Text>
          <Text>{userData?.gender}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>Street:</Text>
          <Text>{userData?.location?.street}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>City:</Text>
          <Text>{userData?.location?.city}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>State:</Text>
          <Text>{userData?.location?.state}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>Country:</Text>
          <Text>{userData?.location?.country}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text>Timezone:</Text>
          <Text>{userData?.location?.timezone}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text style={{ marginRight: 20 }}>Registation Date:</Text>
          <Text>{userData?.registerDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo}>
          <Text style={{ marginRight: 20 }}>Updated Date:</Text>
          <Text>{userData?.updatedDate}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  userDataContainer: {
    width: "80%",
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
  imageContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonC: {
    paddingVertical: 10,
    backgroundColor: "green",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "80%",
    overflow: "hidden",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default UserScreen;
