import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import EventTile from './EventTile';
import DietRecommendation from './DietRecommendation'

export default class App extends React.Component {
  state= {
    recommendation: null
  }
  async componentDidMount(){
    const res = await fetch("https://dev.akila.ai/api/insights/summary/:weeknum/monday")
      .then(res=>res.json());
    console.log(res)
    this.setState({
      recommendation: res
    })
  }
  render() {
    if(this.state.recommendation === null) return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )

    return (
      <FlatList 
      data={this.state.recommendation}
      keyExtractor={(item, index) => ""+index}
      renderItem={({item, index}) => (
        <DietRecommendation entry={item} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
