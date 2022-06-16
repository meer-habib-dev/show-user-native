import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Loading from "./sections/Loading";
import Users from "./sections/Users";

const HomeScreen = () => {
  const [userData, setUserData] = useState([]);
  const [fetchAmount, setFetchAmount] = useState(10);
  const [loading, setLoading] = useState(false);

  const getMoviesFromApi = async (fetchA) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://dummyapi.io/data/v1/user?limit=${fetchA}`,
        {
          headers: {
            "app-id": `62a9a9261f59847dc960fc9a`,
          },
        }
      );
      let responseJson = await response.json();
      setUserData(responseJson?.data);
    } catch (error) {
      console.error("getting", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getMoviesFromApi(fetchAmount);
  }, [fetchAmount]);
  let stopFetching = true;
  const handleOnEndReach = () => {
    if (!stopFetching) {
      setFetchAmount(fetchAmount + 10);
    }
    console.log("calling end");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userData}
        onEndReached={handleOnEndReach}
        onEndReachedThreshold={0.5}
        onScrollEndDrag={() => (stopFetching = false)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Users item={item} />}
        ListFooterComponent={loading && <Loading />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    // justifyContent:'center',
    width: "100%",
  },
});

export default HomeScreen;
