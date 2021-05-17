import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ArticlesScreen from './Articles';
import AllPostsScreen from './AllPosts';
import postReducer from '../reducers/postReducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(postReducer);
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Provider store={store}>
        <Stack.Navigator>
           <Stack.Screen
            name = "HomePage"
            component={ArticlesScreen}
           />
           <Stack.Screen
            name = "AllPostsScreen"
            component={AllPostsScreen}
           />
        </Stack.Navigator>
        </Provider>
    )
}

export default function NavigateHome(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}