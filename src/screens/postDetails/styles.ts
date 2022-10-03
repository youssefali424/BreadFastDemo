import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import commonStyles from "../../styles/common/style";

export const styles = StyleSheet.create({
  userContainer: {
    padding: 15,
    marginHorizontal: 10,
    alignSelf: "center",
    ...commonStyles.center,
  },
  userAvatar: {
    height: 70,
    width: 70,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  bodyContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

});
