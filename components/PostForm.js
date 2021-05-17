import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import {connect} from 'react-redux'

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }
        
        console.log("pressed!")
        console.log(data)
       
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })

        this.state.firstname="";
        this.state.lastname="";
    }
    render(){
        return(
            <View styles={styles.container} onPress={this.handleSubmit}>
                <Text style={styles.Header}>Fill In</Text>
                
                <TextInput
                    placeholder="Firstname"
                    onChangeText={(firstname) => this.setState({firstname})}
                />

                <TextInput
                    placeholder="Lastname"
                    onChangeText={(lastname) => this.setState({lastname})}
                />

                <Button title='SUBMIT' onPress={this.handleSubmit}/>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        fontSize: 20
    }
})

export default connect()(PostForm);