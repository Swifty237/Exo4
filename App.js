import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <View style={styles.content1}>

            <View style={styles.content3}>
                <View style={styles.purpleBox}></View>
                <View style={styles.yellowBox}></View>
                <View style={styles.pinkBox}></View>
            </View>
            
            <View style={styles.content4}>
                <View style={styles.redBox}></View>
                <View style={styles.blueBox}></View>
            </View>

        </View>

        <View style={styles.content2}>
           
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content1: {
    flex: 1,
    flexDirection: "row"
  },

  content2: {
    flex: 1,
  },

  content3: {
    flex: 1,
  },

  content4: {
    flex: 1,
    flexDirection: "row"
  },

  redBox: {
    flex: 3,
    backgroundColor: "red"
  },

  greenBox: {
    flex: 2,
    backgroundColor: "green"
  },

  blueBox: {
    flex: 1,
    backgroundColor: "blue"
  },

  purpleBox: {
    flex: 4,
    backgroundColor: "purple",
  },
  
  yellowBox: {
    flex: 1,
    backgroundColor: "yellow",
  },

  pinkBox: {
    flex: 1,
    backgroundColor: "pink"
  } 
});
