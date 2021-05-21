import React,{Component} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'
import CoinList from '../features/CoinList'


class Crypto extends Component {
    render(){
        return (
            <View style={styles.container}>
             
            <CoinList/>
            <Button title="Go back" onPress={()=> this.props.navigation.goBack(null)}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default Crypto;