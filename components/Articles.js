import React, {Component} from 'react'
import {View, Text, StyleSheet, ImageBackground,TouchableOpacity, Button} from 'react-native'
import firebase from 'firebase'
import PostForm from './PostForm'
import Card from '../features/Card'
import bgimage from '../picture/Pastel-Sky.jpeg'
import CardBand from '../features/CardBand'

class Articles extends Component {

    render(){
        return (
        
        <ImageBackground source={bgimage} style={styles.image}>
            <View style={styles.container}>
            <CardBand>
               <PostForm/>
            </CardBand>

            <Card>
                <Button title="Check Fill in" onPress={()=> this.props.navigation.navigate('AllPostsScreen')}/> 
            </Card>
            <Card>
                <Button title="BitCoin Details" onPress={()=> this.props.navigation.navigate('CryptoDetailScreen')}/> 
            </Card>

               {/* <Button title="Check Fill in" onPress={()=> this.props.navigation.navigate('AllPostsScreen')}/>
               <Button title="Go to Crypto" onPress={()=> this.props.navigation.navigate('CryptoScreen')}/>
               <Button title="See Details" onPress={()=> this.props.navigation.navigate('CryptoDetailScreen')}/> */}
            
           
            <TouchableOpacity style={styles.LogoutContainer} onPress={() => firebase.auth().signOut()}>
            <Text style={styles.LogoutText}>Logout</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        
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
    },
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    LogoutText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    LogoutContainer: {
        backgroundColor: '#B997B6', 
        padding: 15,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff',
        width: '30%',
        
    }
})

export default Articles;
