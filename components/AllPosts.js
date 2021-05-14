import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import Post from './Post'

class AllPosts extends Component {
    render(){
        return(
            <View>
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

export default connect(mapStateToProps)(AllPosts);