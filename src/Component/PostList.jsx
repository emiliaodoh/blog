
import React, from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import axios from axios

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const PostList = (props) => {

    useEffect(() => {
        axios.get('https://api.github.com/users/mapbox')
        .then((response) => {
          console.log(response.data);
        });

    }, [])
    return (
        <div>
            {props.posts.map((post) => <div id={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>)}
        </div>
    )
}

export default connect(mapStateToProps)(PostList)