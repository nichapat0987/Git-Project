import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native'
import firebase from 'firebase'
import PostForm from './PostForm'
import Card from '../features/Card'


class Articles extends Component {

    render(){
        return (
        <View style={styles.container}>
            <Card>
               <PostForm/>
            </Card>
               <Button title="Check Fill in" onPress={()=> this.props.navigation.navigate('AllPostsScreen')}/>
               <Button title="Go to Crypto" onPress={()=> this.props.navigation.navigate('CryptoScreen')}/>
               <Button title="See Details" onPress={()=> this.props.navigation.navigate('CryptoDetailScreen')}/>
            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
            <Text style={styles.LogoutButton}>Logout</Text>
            </TouchableOpacity>


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
    LogoutButton: {
        color:'red'
    }
})

export default Articles;
