import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Post extends Component {
  render() {
    return (
      <div className="post">
        <Link to={"/about/"+this.props.post.title}><h2 className="post_title">{this.props.post.title}</h2></Link>
        <p className="post_message">{this.props.post.message}</p>

        <p className="post_message">{this.props.post.numPos}</p>
        <p className="post_message">{this.props.post.location}</p>
        <p className="post_message">{this.props.post.compName}</p>
        <p className="post_message">{this.props.post.reqSkill}</p>
        <p className="post_message">{this.props.post.editing}</p>
        <div className="control-buttons">
          <button className="edit" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit</button>
          <button className="delete" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Delete</button>
        </div>
      </div>
    );
  }
}
export default connect()(Post);