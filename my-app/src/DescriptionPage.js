import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Post from './Post';

class DescriptionPage extends Component {
    render() {
        console.log(this.props.posts);
        return (
            <>
                <Link to="/"><h2 className="center ">Back to home</h2></Link>
                <p><strong>User ID: </strong>{this.props.match.params.description}</p>
                {this.props.posts.map((post) => (post.title === this.props.match.params.description) && <Post post={post} key={post.id} />)}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    posts: state
    }
}
export default connect(mapStateToProps)(DescriptionPage);