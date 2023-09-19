import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";

const CategoriesList = ({ category }) => {
  return (
    <>
      <Header title={category} />
    </>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
