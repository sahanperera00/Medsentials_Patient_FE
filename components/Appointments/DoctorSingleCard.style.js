import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants"; // Update the path to your constants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.medium,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  doctorImage: {
    width: 100, // Adjust the width for your image
    height: 100, // Adjust the height for your image
    borderRadius: 40, // To make it a circular image
    marginRight: 10, // Add spacing between the image and text
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: 18,
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
