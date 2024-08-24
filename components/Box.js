import { view, StyleSheet } from 'react-native';

export default function Box() {
  return <view style={styles.containerBox}></view>;
}

const styles = StyleSheet.create({
  containerBox: {
    width: 100,
    height: 100,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
