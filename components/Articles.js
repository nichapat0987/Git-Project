
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native'
import firebase from 'firebase'
import PostForm from './PostForm'
import AllPosts from './AllPosts'
import postReducer from '../reducers/postReducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(postReducer);

class Articles extends Component {

    render(){
        return (
        <View style={styles.container}>
            <Provider store={store}>
               <PostForm/>
               <AllPosts />
            </Provider>
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
