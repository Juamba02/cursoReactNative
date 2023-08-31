import { View, FlatList, StyleSheet } from "react-native";
import React from "react";

const List = ({ itemList, renderListItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
    paddingBottom: 100,
  },
});
