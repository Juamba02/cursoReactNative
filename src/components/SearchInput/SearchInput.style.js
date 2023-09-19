import { StyleSheet } from "react-native";
import { color } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
  },
  input: {
    color: "white",
    backgroundColor: color.secondary,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: color.primary,
    width: "80%",
    fontSize: 20,
  },
});
