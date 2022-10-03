import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touchableFull: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerContent: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContentVertically: {
    alignItems: 'center',
  },
  centerHorizontal: {
    alignSelf: 'center',
  },
  verticalBr: { width: 2, height: '90%', backgroundColor: '#000000' },
  br: { width: '80%', height: 2, backgroundColor: '#000000' },
  fullbrLight: {
    width: '100%',
    height: 1,
    backgroundColor: '#00000030',
  },
  overflowHide: {
    overflow: 'hidden',
  },
});
export default commonStyles;
