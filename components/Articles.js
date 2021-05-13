import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native'
import firebase from 'firebase'


class Articles extends Component {

    render(){
        return (
        <View style={styles.container}>

            <Text>This is for fill in.</Text>

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

export default Articles;