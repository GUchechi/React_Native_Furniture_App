import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "semiBold",
    fontSize: SIZES.xLarge -2,

  }
});

export default styles;
