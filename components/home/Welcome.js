import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Welcome.styles";
import { COLORS, SIZES } from "../../constants";

export default function Welcome() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xsmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary)}>
          Luxirious Furniture
        </Text>
      </View>
    </View>
  );
}
