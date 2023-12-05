import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styles from "./Headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function Headings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewRivals")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
