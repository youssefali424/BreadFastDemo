import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StyleSheet, View } from "react-native";
import { HomeScreen } from "../screens/home";
import { PostDetailsScreen } from "../screens/postDetails/postDetails";
import { MainStackParams } from "./routes";


const MainStack = createNativeStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerTitle: "Home" }}
    />
    <MainStack.Screen
      name="PostDetails"
      component={PostDetailsScreen}
      options={{ headerTitle: "" }}
    />
  </MainStack.Navigator>
);
