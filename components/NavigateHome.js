import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ArticlesScreen from './Articles';
import AllPostsScreen from './AllPosts';
import CryptoScreen from './Crypto';
import CryptoDetailScreen from './CoinDetailPage';

import postReducer from '../reducers/postReducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { WatchListContextProvider } from '../context/watchListContext';
import { StyleSheet,Dimensions } from 'react-native';


const store = createStore(postReducer);
const Stack = createStackNavigator();


function MyStack() {
    return (
        <WatchListContextProvider>
        <Provider store={store}>
        <Stack.Navigator >
           <Stack.Screen
            name = "HomePage"
            component={ArticlesScreen}
            
            options={{headerStyle: {height: 0}}}
           />
           <Stack.Screen
            name = "AllPostsScreen"
            component={AllPostsScreen}
            options={{headerStyle: {height: 0}}}
           />
           <Stack.Screen
            name = "CryptoScreen"
            component={CryptoScreen}
            options={{headerStyle: {height: 0}}}
           />
           <Stack.Screen
            name = "CryptoDetailScreen"
            component={CryptoDetailScreen}
            options={{headerStyle: {height: 0}}}
            
           />
        </Stack.Navigator>
        </Provider>
        </WatchListContextProvider>
    )
}

export default function NavigateHome(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

