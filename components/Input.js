import { View, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

const Input = ({ textValue, onHandleChangeItem, addItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="New Item"
        style={styles.input}
        value={textValue}
        onChangeText={onHandleChangeItem}
      />
      <Button title="+ ADD" onPress={addItem} color={"#949494"} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#b0f2c2",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
});
