import React,{Component, PureComponent} from 'react'
import { View, Text} from 'react-native'


interface Props {
  restaurant : string
}

export default class RestaurantItem extends Component<Props> {
  // state
   
   render() {
     return (
       <View>
         <Text>{this.props.restaurant}</Text>
       </View>
     )
   }
 }
