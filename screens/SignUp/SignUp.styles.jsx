import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 5,
    width: SIZES.width,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: SIZES.xLarge,
  },
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    color: "grey",
    fontSize: 15,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),

  iconStyle: {
    marginRight: 10,
  },

  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  regWrapper: {
    flex: 1,
    flexDirection: "row",
    columnGap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  regQuestion: {
    // marginTop: 10,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 17,
    color: "grey",
    fontStyle: "italic",
  },
  registration: {
    // marginTop: 10,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 22,
    color: COLORS.primary,
    fontStyle: "italic",
  },
});

export default styles;
