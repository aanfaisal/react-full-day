import React,{Component} from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import RestaurantItem from "./Restaurant";

export default class RestaurantList extends Component {
  state = {
    restaurants:[
      "Sambel", "Kwetiau", "Geprek",
    ]
  }
    render() {
      return (
        
        <ScrollView style={styles.card}>

          {this.state.restaurants.map((restaurants)=>{
            return <RestaurantItem name={restaurants} />
          })}

        </ScrollView>
       
      )
    }
}

const styles = StyleSheet.create({
  card : {
    height : 50,
    borderWidth :1,
    marginTop: 10,
    backgroundColor: "#fff",
  }
})
