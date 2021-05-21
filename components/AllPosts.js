import React,{Component} from 'react'
import {View, Text,StyleSheet,Button,ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import Post from './Post'
import Card from '../features/Card'
import bgimage from '../picture/Pastel-Sky.jpeg'
import CardBand from '../features/CardBand'

class AllPosts extends Component {
    
    render(){
        return(
            <ImageBackground source={bgimage} style={styles.image}>
                
                <View style={styles.container}>
                    <CardBand>
                    <Text style={{textAlign:'center',fontSize: 20}}>All Posts</Text>
                    {this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
                    <Button title="Go back" onPress={()=> this.props.navigation.goBack(null)}/>
                    </CardBand>
                </View>
                
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
})

export default connect(mapStateToProps)(AllPosts);