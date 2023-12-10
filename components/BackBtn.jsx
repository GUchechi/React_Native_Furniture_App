import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

export default function BackBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.BackBtn}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  BackBtn: {
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    top: SIZES.large,
  },
});
