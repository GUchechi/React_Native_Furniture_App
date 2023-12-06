import React from "react";
import { Image, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import { Image } from "react-native";
import styles from "./ProductList.style";

export default function ProductList() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={require("../../assets/images/load.gif")} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
    </View>
  );
}
