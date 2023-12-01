import React from "react";
import { StyleSheet, Text,TextInput, View,TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const Search = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
