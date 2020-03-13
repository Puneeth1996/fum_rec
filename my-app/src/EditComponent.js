import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
  handleEdit = (e) => {
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
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
          <input required type="number" ref={(input) => this.numPos = input}  defaultValue={this.props.post.numPos}  placeholder="Enter Num Postions" /><br /><br />
          <input required type="text" ref={(input) => this.location = input}  defaultValue={this.props.post.location}  placeholder="Enter Location" /><br /><br />
          <input required type="text" ref={(input) => this.compName = input}  defaultValue={this.props.post.compName}  placeholder="Enter Company Name" /><br /><br />
          <input required type="text" ref={(input) => this.reqSkill = input}  defaultValue={this.props.post.reqSkill}  placeholder="Enter Required Skills" /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);