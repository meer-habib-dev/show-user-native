import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditMyProfile from "../Screens/EditProfileSreen";
import HomeScreen from "../Screens/HomeScreen";
import UserScreen from "../Screens/UserScreen";

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditMyProfile"
        component={EditMyProfile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
