import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const textStyle = ({ colors: { text } }: Theme) =>
  StyleSheet.create({
    text: {
      color: text,
      fontSize: 14,
    },
  });
