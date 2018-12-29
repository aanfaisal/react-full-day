import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, StatusBar } from "react-native";
import axios from "axios";
import Header from "./src/component/Header";
import RestaurantList from "./src/component/RestaurantList";

interface State {
  isLoading: boolean;
  restaurants: any[];
}
export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      restaurants: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("https://developers.zomato.com/api/v2.1/search", {
        headers: {
          "user-key": "9e4b89f662dfa30f1ea6986c31ccda5b"
        }
      })
      .then(response => {
        console.log(response.data.restaurants)
        const restaurants = response.data.restaurants.map((item: any) => {
          const restaurant = item.restaurant;

          return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.location.address
          }
        })

        this.setState({
          restaurants,
          isLoading: false
        })
        // get data dari zomato
      })

      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
      <Header />
        {this.state.isLoading &&
        <ActivityIndicator size="large"/>}
        
        <RestaurantList restaurants={this.state.restaurants} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight
  }
});
