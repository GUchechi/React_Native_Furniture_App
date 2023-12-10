import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnStyle}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
  btnStyle: {
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
