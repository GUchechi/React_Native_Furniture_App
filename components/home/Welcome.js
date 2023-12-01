import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import styles from "./Welcome.styles";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xsmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxirious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {
              navigation.navigate("Search");
            }}
            placeholder="What are you looking for?"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
