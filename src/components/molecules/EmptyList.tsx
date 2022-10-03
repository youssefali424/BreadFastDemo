import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import commonStyles from '../../styles/common/style';
import { images } from '../../util/assets';

const EmptyListView = () => {
  return (
    <View style={[StyleSheet.absoluteFill, commonStyles.center]}>
      <Image resizeMode="contain" style={styles.image} source={images.nodata} />
    </View>
  );
};

export default EmptyListView;

const styles = StyleSheet.create({
  image: {
    width: '75%',
    height: '60%',
  },
});
