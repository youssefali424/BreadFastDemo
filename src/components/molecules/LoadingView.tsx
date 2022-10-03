import { View, StyleSheet, ActivityIndicator, ColorValue } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import commonStyles from "../../styles/common/style";

interface Props {
  loading?: boolean | null;
  backgroundColor?: ColorValue;
  size?: number | "large" | "small" | undefined;
}
function LoadingView(props: Props) {
  const { loading, backgroundColor, size = "large" } = props;
  const {
    colors: { primary },
  } = useTheme();
  return loading ? (
    <View
      testID="LoadingView"
      style={[
        StyleSheet.absoluteFill,
        commonStyles.center,
        styles.container,
        backgroundColor ? { backgroundColor } : null,
        { zIndex: 999, backgroundColor },
      ]}
    >
      <ActivityIndicator color={primary} size={size} animating />
    </View>
  ) : null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000050",
  },
});
export default LoadingView;
