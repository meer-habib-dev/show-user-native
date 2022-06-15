import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Users from './components/Users';


const HomeScreen = () => {
  const [userData, setUserData] = useState([])

    useEffect(() => {
      const getMoviesFromApi = async() => {
  try {
    let response = await fetch(
        'https://dummyapi.io/data/v1/user?limit=10', {
             headers: {
    'app-id': `62a9a9261f59847dc960fc9a`
          }
      }
    );
      let responseJson = await response.json();
      setUserData(responseJson?.data)
    
  } catch (error) {
    console.error('getting',error);
  }
  }
    getMoviesFromApi()
    }, [])
   
  return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={userData}
              
              keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
                <Users item={item} />
              )}
          />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        // justifyContent:'center',
        width:'100%'
        
    },

})

export default HomeScreen