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
            <View  onPress={this.handleSubmit}>
                <View style={styles.Header}>
                    <Text style={styles.Headerfont}>Fill In</Text>
                </View>

                <View style={styles.Formfill}>
                <TextInput
                    placeholder="Firstname"
                    style={styles.textinput}
                    onChangeText={(firstname) => this.setState({firstname})}
                />
                    <View style={{marginTop: 10}}>
                    <TextInput
                        placeholder="Lastname"
                        style={styles.textinput}
                        onChangeText={(lastname) => this.setState({lastname})}
                    />
                    </View>
                </View>

                <Button title='SUBMIT' onPress={this.handleSubmit}/>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        
    },
    Headerfont: {
        fontSize: 25
    },
    Formfill: {
        padding: 20,
        margin: 10
    },
    textinput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#DCD7D6',
        borderRadius: 12,
        fontSize: 15,
    },
})

export default connect()(PostForm);