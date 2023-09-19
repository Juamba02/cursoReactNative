import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Home, Products } from "./src/screens";
import fonts from "./src/global/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  return categorySelected ? (
    <Products category={categorySelected} setCategorySelected={setCategorySelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  );
}

const styles = StyleSheet.create({});
