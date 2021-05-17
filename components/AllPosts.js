import React,{Component} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Post from './Post'


class AllPosts extends Component {
    render(){
        return(
            <View style={styles.container}>
                
                <Text>All Posts</Text>
                {this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
                
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