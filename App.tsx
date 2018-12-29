import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button title="click" onPress={()=> Alert.alert("Hai")}></Button>
        <RestaurantItem />
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

class RestaurantItem extends Component {
  render() {
    return (
      <View>
        <Text>Nama Restoran</Text>
      </View>
    )
  }
}
