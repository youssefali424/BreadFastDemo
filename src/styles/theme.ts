import { Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#344955',
    background: '#F7F7F7',
    text: '#000000',
    border: '#000000',
    card: '#FFFFFF',
    notification: '#344955',
  },
};
export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#55778b',
    background: '#121212',
    text: '#FFFFFF',
    border: '#FFFFFF30',
    card: '#363636',
    notification: '#55778b',
  },
};
