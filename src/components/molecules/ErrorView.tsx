import { View, StyleSheet, Image, Pressable, ImageStyle } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import commonStyles from "../../styles/common/style";
import { images } from "../../util/assets";
import useStyle from "../../styles/MakeStyle";
import { errorStyles } from "./styles";
import { AppText } from "../atoms/appText";

interface Props {
  onTryAgain?: () => void;
}

function ErrorView({ onTryAgain }: Props) {
  const styles = useStyle(errorStyles);
  return (
    <View style={commonStyles.center}>
      <Image source={images.error} style={[styles.errorImage as ImageStyle]} />
      <Pressable style={styles.tryAgainButton} onPress={onTryAgain}>
        <AppText style={{ color: "#FFFFFF" }}>{"try again"}</AppText>
      </Pressable>
    </View>
  );
}

export default ErrorView;
