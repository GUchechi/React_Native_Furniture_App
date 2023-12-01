import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

export default function Carousel() {
  const slides = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn5.jpg"),
    require("../../assets/images/fn4.jpg"),
    require("../../assets/images/fn3.jpg"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        autoplay
        circleLoop
        inactiveDotColor={COLORS.secondary}
        imageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
