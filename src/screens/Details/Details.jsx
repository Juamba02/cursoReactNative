import { View, Text, Image } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./Details.style";

const Details = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Header title={product.title} />
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>
    </View>
  );
};

export default Details;
