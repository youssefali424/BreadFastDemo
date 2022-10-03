import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { Pressable, useColorScheme, Image } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightTheme, darkTheme } from "./styles/theme";
import { Main } from "./navigation/Main";
import { images } from "./util/assets";

const client = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  useEffect(() => setIsDark(colorScheme === "dark"), [colorScheme]);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <QueryClientProvider client={client}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <NavigationContainer {...{ theme }}>
          <Main />
        </NavigationContainer>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            position: "absolute",
            bottom: 20,
            right: 20,
            height: 50,
            borderRadius: 25,
          }}
          onPress={() => {
            setIsDark((prev) => !prev);
          }}
          android_ripple={{ radius: 25, color: "#00000050" }}
        >
          <Image
            source={isDark ? images.lightmode : images.darkmode}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
