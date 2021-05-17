
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native'
import firebase from 'firebase'
import PostForm from './PostForm'
import AllPosts from './AllPosts'


class Articles extends Component {

    render(){
        return (
        <View style={styles.container}>
          
               <PostForm/>
               <Button title="Check" onPress={()=> this.props.navigation.navigate('AllPostsScreen')}/>
           
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
