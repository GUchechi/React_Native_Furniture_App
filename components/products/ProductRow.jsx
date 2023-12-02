import React from "react";
import { FlatList } from "react-native";
import styles from "./ProductRow.styles";
import { Text } from "react-native";
import { SIZES } from "../../constants";
import { View } from "react-native";
import ProductViewCard from "./ProductViewCard";

export default function ProductRow() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={{ marginTop: 5}}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductViewCard />}
        horizontal
        contentContainerStyle={{ columnGap: 1 }}
      />
    </View>
  );
}
