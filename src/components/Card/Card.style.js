import { StyleSheet } from "react-native";
import { color } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: color.secondary,
      shadowColor: "#000",
      shadowOffset: { height: 2, width: 3 },
      elevation: 10,
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
  });