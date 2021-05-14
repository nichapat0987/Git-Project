import React,{Component} from 'react';
import firebase from 'firebase';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LoginForm from './components/LoginForm';
import Articles from './components/Articles';


class App extends Component{

  state={
    loggedIn:false
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyA8bZ34MpV5lhHDddMlkLA-HE_PMmPueNI",
      authDomain: "fir-native-react.firebaseapp.com",
      projectId: "fir-native-react",
      storageBucket: "fir-native-react.appspot.com",
      messagingSenderId: "323448934026",
      appId: "1:323448934026:web:7dd33e7e5345c6934de773",
      measurementId: "G-72Y3W1DR2L"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({
          loggedIn:true
        })
      }else{
        this.setState({
          loggedIn:false
        })
      }
    })
  }

  renderContent = () => {
    switch(this.state.loggedIn){
      case false:
        return <LoginForm />
      
      case true:
        return <Articles />
    }
  }

    render(){
      return(
            <View style={styles.container}>
                    {this.renderContent()}
            </View>
      )
    } 
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default App;
