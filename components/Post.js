import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class Post extends Component{
    render(){
        return (
            <View>
                <Text>{this.props.post.firstname}</Text>
                <Text>{this.props.post.lastname}</Text>
            </View>
        )
    }
}