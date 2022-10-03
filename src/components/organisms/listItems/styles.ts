import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    width: "95%",
    alignSelf: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  body: {
    fontSize: 14,
    marginTop: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginEnd: 10,
  },
  subtitle: {
    opacity: 0.5,
    fontSize: 13,
  },
});
