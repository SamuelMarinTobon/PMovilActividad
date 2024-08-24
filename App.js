import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//punto 2
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}></View>
      <View style={styles.containerB}></View>
      <View style={styles.containerC}></View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerA: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 12,
  },
  containerB: {
    flex: 3,
    backgroundColor: 'blue',
    margin: 12,
  },
  containerC: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 12,
  },
});


/*
//punto 1
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}></View>
      <View style={styles.containerB}></View>
      <View style={styles.container1}>
        <View style={styles.containerC}></View>
        <View style={styles.containerD}></View>
        <View style={styles.containerE}></View>
      </View>
      <View style={styles.containerF}></View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    margin: 12,
  },
  containerA: {
    flex: 1,
    backgroundColor: 'coral',
    margin: 12,
  },
  containerB: {
    flex: 2,
    backgroundColor: 'coral',
    margin: 12,
  },
  containerC: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerD: {
    flex: 1,
    backgroundColor: 'coral',
    marginHorizontal:32,
  },
  containerE: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerF: {
    flex: 1,
    backgroundColor: 'coral',
    margin: 12,
  },
});
*/

/*
//punto3

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}></View>
      <View style={styles.container1}>
        <View style={styles.containerB}></View>
        <View style={styles.containerC}></View>
        <View style={styles.containerD}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.containerE}></View>
        <View style={styles.containerF}></View>
        <View style={styles.containerG}></View>
      </View>
      <View style={styles.containerH}></View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    margin: 12,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    margin: 12,
  },
  containerA: {
    flex: 1,
    backgroundColor: 'coral',
    margin: 12,
  },
  containerB: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerC: {
    flex: 1,
    backgroundColor: 'coral',
    marginHorizontal: 32,
  },
  containerD: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerE: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerF: {
    flex: 1,
    backgroundColor: 'coral',
    marginHorizontal: 32,
  },
  containerG: {
    flex: 1,
    backgroundColor: 'coral',
  },
  containerH: {
    flex: 2,
    backgroundColor: 'coral',
    margin: 12,
  },
});
*/