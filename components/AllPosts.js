import React,{Component} from 'react'
import {View, Text,StyleSheet,Button} from 'react-native'
import {connect} from 'react-redux'
import Post from './Post'

class AllPosts extends Component {
    
    render(){
        return(
            <View style={styles.container}>
                <Text>All Posts</Text>
                {this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
                <Button title="Go back" onPress={()=> this.props.navigation.goBack(null)}/>
            </View>
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
})

export default connect(mapStateToProps)(AllPosts);