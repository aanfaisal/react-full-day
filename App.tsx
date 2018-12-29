import React,{Component, PureComponent} from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar } from 'react-native';
//import axios from 'axios';

import RestaurantItem from './src/component/Restaurant';
import Header  from './src/component/Header';
import RestaurantList from './src/component/RestaurantList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <RestaurantList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    
  },
});


