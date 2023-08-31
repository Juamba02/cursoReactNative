import Modal from "./components/Modal";
import Input from "./components/Input";
import List from "./components/List";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [itemSelectedName, setItemSelectedName] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => setTextValue(text);

  const onHandleDelete = () => {
    let arr = itemList;
    arr.splice(itemSelected, 1);
    setItemList(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index, name) => {
    setModalVisible(true);
    setItemSelected(index);
    setItemSelectedName(name);
  };

  const onHandleCloseModal = () => {
    setModalVisible(false);
  };

  const addItem = () => {
    if (textValue === "") {
      return;
    }
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.textoView}
      onPress={() => onHandleModal(index, item.value)}
    >
      <Text style={styles.texto}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.safeArea}>
      <Text style={styles.title}>Lista de videojuegos deseados</Text>
      <Input
        textValue={textValue}
        onHandleChangeItem={onHandleChangeItem}
        addItem={addItem}
      />
      <List itemList={itemList} renderListItem={renderListItem} />
      <Modal
        modalVisible={modalVisible}
        onHandleDelete={onHandleDelete}
        onHandleCloseModal={onHandleCloseModal}
        name={itemSelectedName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "white",
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 25,
  },
  textoView: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#fdb4bf",
    shadowColor: "#fdb4bf",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    paddingLeft: 15,
    color: "#fff",
    fontWeight: "600",
    fontVariant: "no-common-ligatures",
  },
});
