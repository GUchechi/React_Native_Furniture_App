import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import styles from "./ProductViewCard.styles";
import { Ionicons } from "@expo/vector-icons";

const ProductViewCard = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.2080039577.1701705974&semt=ais",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Products
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Products
          </Text>
          <Text style={styles.price}> $2352</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle"/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductViewCard;
