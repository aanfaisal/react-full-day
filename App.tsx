import React,{Component, PureComponent} from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicatorComponent } from 'react-native';

import RestaurantItem from './src/component/Restaurant';
import Header  from './src/component/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Hello World</Text>
        <Button title="click" onPress={()=> Alert.alert("Hai")}></Button>
        <RestaurantItem restaurant="Restaurant Bakso"/>
        <RestaurantItem restaurant="Restaurant Sambel" />
        <RestaurantItem restaurant="Restaurant Sambel" />
        <RestaurantItem restaurant="Restaurant Sambel" />
        <RestaurantItem restaurant="Restaurant Sambel" />
      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

