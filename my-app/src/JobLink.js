import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class JobLink extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/"><h2 className="center ">Back to home</h2></Link>
                </div>
                <div className="post">
                    <Link to={"/"+this.props.post.title}><h2 className="post_title">{this.props.post.title}</h2></Link>
                    <p className="post_message">{this.props.post.message}</p>
                    <p className="post_message">{this.props.post.numPos}</p>
                    <p className="post_message">{this.props.post.location}</p>
                    <p className="post_message">{this.props.post.compName}</p>
                    <p className="post_message">{this.props.post.reqSkill}</p>
                    <p className="post_message">{this.props.post.editing}</p>
                </div>
            </div>
        )
    }
}
export default connect()(JobLink);