import { StyleSheet } from "react-native";
import { color } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins",
  },
});
