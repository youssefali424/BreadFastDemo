import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextProps } from 'react-native';
import useStyle from '../../styles/MakeStyle';
import { textStyle } from './styles';

export const AppText = (props: TextProps) => {
  const styles = useStyle(textStyle);

  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};
