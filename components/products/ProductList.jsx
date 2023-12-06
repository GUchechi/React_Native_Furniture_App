import React from "react";
import { Image, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./ProductList.style";
import { FlatList } from "react-native";
import ProductViewCard from "./ProductViewCard";

export default function ProductList() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require("../../assets/load.gif")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductViewCard item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}
