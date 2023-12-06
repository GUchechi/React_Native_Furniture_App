import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import styles from "./Search.style";
import axios from "axios";
import { FlatList } from "react-native";

const Search = () => {
  const [searchKey, setSearckKey] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.29:3000/api/products/search/${searchKey}`
      );
      console.log(response.data);
    } catch (error) {
      console.log("Failed to get Products", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearckKey}
            placeholder="What are you looking for?"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              handleSearch();
            }}
          >
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1, }}>
          <Image
            source={require("../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList />
      )}
    </SafeAreaView>
  );
};

export default Search;
