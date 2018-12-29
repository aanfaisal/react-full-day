import React,{Component, PureComponent} from 'react'
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'

interface Props {
  name : string
}
interface State {
  isFavorite : boolean
}

export default class RestaurantItem extends Component<Props, State> {
  state = {
    isFavorite: false
  };

  setFavoriteTrue = ()=>{
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }
   render() {
     return (
       <TouchableOpacity onPress={}>
       <View style={styles.container}>
         <Text>{this.props.name}</Text>
         {this.state.isFavorite == true && <Text>Favorite</Text>}
       </View>
       </TouchableOpacity>
     )
   }
 }

 const styles = StyleSheet.create({
  container : {
    height : 50,
    borderWidth :1,
    marginTop: 10,
    backgroundColor: "#fff",
  }
})
