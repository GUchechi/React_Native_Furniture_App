import React, { useState } from "react";
import axios from "axios";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import styles from "./Search.style";
import SearchTile from "./SearchTile";

const Search = () => {
  const [searchKey, setSearckKey] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.29:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
      setSearckKey("");
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
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
