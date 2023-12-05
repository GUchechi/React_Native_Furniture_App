import React from "react";
import { FlatList } from "react-native";
import styles from "./ProductRow.styles";
import { Text } from "react-native";
import { SIZES } from "../../constants";
import { View, Image } from "react-native";
import ProductViewCard from "./ProductViewCard";
import useFetch from "../../hooks/useFetch";

export default function ProductRow() {
  const { data, isLoading, error } = useFetch();

  return (
    <View style={{ marginTop: 5, marginLeft: 12 }}>
      {isLoading ? (
        <Image source={require("../../assets/load.gif")} />
      ) : error ? (
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
          Something went wrong!!!
        </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductViewCard item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: -10 }}
        />
      )}
    </View>
  );
}
