import { NavigationContainer } from "@react-navigation/native";
import Screens from "./app/navigation/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}
