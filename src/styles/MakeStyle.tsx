import { Theme, useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

function useStyle<T extends NamedStyles<T> | NamedStyles<any>>(
  style: (theme: Theme) => T | NamedStyles<T>,
) {
  const theme = useTheme();
  const styles = useMemo(() => style(theme), [style, theme]);
  return styles;
}
export default useStyle;
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
