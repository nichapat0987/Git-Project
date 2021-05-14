import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,Button} from 'react-native'
 

class Articles extends Component {
    render() {
      return(
        <View style={styles.container}>
            <Text style={styles.Header}>Fill In</Text>
            <TextInput
                    placeholder="Firstname"
            />
            <TextInput
                    placeholder="Lastname"
            />

            <Button title='SUBMIT'/>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Header: {
    fontSize: 30
  },
});

  export default Articles;