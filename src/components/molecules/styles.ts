import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const errorStyles = (theme: Theme) =>
  StyleSheet.create({
    tryAgainButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    errorImage: {
      width: 70,
      height: 70,
      marginBottom: 10,
    },
  });
