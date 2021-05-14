import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'


class LoginForm extends Component {
    state={
        email:'',
        password:'',
        error: '',
        loading:false
    }

    onBottomPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })
    }


    inLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }
    
    render() {     
    return (
        <View style={styles.container}>
            <Text style={styles.Header}>Log In</Text>
            <TextInput 
                placeholder="email" 
                style={styles.inputText} 
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                />
            <TextInput 
                placeholder="password" 
                style={styles.inputText}
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                />

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
        </View>
    )
    }
}

const styles= StyleSheet.create({
    Header: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 35  
    },
    container: {
        flex: 1,
        justifyContent: 'center'
      
    },
    inputText: {
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 15
    },
    errorText:{
       fontSize:16,
        color: 'red',
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: 'green', 
        padding: 15,
        borderRadius: 8
    }
})

export default LoginForm;