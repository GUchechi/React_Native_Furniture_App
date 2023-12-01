import React from "react";
import { FlatList } from "react-native";
import styles from "./ProductRow.styles";
import { Text } from "react-native";
import { SIZES } from "../../constants";
import { View } from "react-native";
import ProductViewCard from "./ProductViewCard";

export default function ProductRow() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductViewCard />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}
