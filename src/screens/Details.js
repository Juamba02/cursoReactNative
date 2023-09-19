import { StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header/Header";

const Details = ({ product }) => {
  return (
    <>
      <Header title={product} />
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
