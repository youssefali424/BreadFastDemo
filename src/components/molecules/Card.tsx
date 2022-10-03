import { useTheme } from "@react-navigation/native";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { View, StyleSheet, Platform, ViewStyle, StyleProp } from "react-native";

interface Props {
  backgroundColor?: string;
  elevation?: number;
  cornerRadius?: number;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}
const Card: React.FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    elevation = 3,
    opacity,
    cornerRadius,
    backgroundColor,
  } = props;
  const theme = useTheme();

  const cardStyle = Platform.select({
    android: () =>
      StyleSheet.create({
        container: {
          elevation: elevation,
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: undefined,
        },
      }),
    ios: () =>
      StyleSheet.create({
        container: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: { width: 0, height: elevation },
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
        },
      }),
  })();

  return (
    <View
      style={[
        cardStyle.container,
        { backgroundColor: theme.colors.card },
        props.style,
      ]}
    >
      {children}
    </View>
  );
};

Card.defaultProps = {
  // backgroundColor: "#ffffff",
  elevation: 3,
  cornerRadius: 5,
  opacity: 0.5,
};

export default Card;
