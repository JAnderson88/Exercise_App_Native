import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const DietRecommendation = ({
  entry: {type, patterns, focus}
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.subTitle}>Patterns</Text>
          <Text>{patterns.text}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.subTitle}>Focus</Text>
          <Text>{focus.text}</Text>
        </View>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    padding: width * 0.02
  },
  row:{
    flexDirection: 'row'
  },
  box:{
    flex: 1,
    padding: 0.02 * width
  },
  title: {
    fontSize: width * 0.07
  },
  subtitle:{
    fontSize: width * 0.05
  },
  p:{

  }
})

export default DietRecommendation;