import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: '#fff',
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: 7,
  },
  seperator: {
    height: 15,
  },
});

export default styles;
