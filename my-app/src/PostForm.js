import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const numPos = this.numPos.value;
    const location = this.location.value;
    const compName = this.compName.value;
    const reqSkill = this.reqSkill.value;
    
    const data = {
      id: new Date(),
      title,
      message,
      numPos,
      location,
      compName,
      reqSkill,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })
    this.getTitle.value = '';
    this.getMessage.value = '';
    this.numPos.value ='';
    this.location.value='';
    this.compName.value='';
    this.reqSkill.value='';
  }
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
          <input required type="number" ref={(input) => this.numPos = input} placeholder="Enter Num Postions" /><br /><br />
          <input required type="text" ref={(input) => this.location = input} placeholder="Enter Location" /><br /><br />
          <input required type="text" ref={(input) => this.compName = input} placeholder="Enter Company Name" /><br /><br />
          <input required type="text" ref={(input) => this.reqSkill = input} placeholder="Enter Required Skills" /><br /><br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);