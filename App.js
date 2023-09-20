import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <StackNavigator />
}

const styles = StyleSheet.create({});
