import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import commonStyles from '../../styles/common/style';

interface Props {
  loading?: boolean | null;
  backgroundColor?: string;
  size?: number | 'large' | 'small' | undefined;
}

function LoadingFooter(props: Props) {
  const { loading, size = 'large' } = props;
  const {
    colors: { primary },
  } = useTheme();
  return (
    <View>
      {loading ? (
        <View style={[commonStyles.center, styles.container, { zIndex: 999 }]}>
          <ActivityIndicator color={primary} size={size} animating />
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    width: '100%',
  },
});
export default LoadingFooter;
