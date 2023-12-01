import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styles from "./Headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

export default function Headings() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

