import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

  render() {
    if(!this.props.user) {
      return (<h4>Select user</h4>)
    }
    return (
      <div>
        <h2>{this.props.user.first}</h2>
        <h3>Age: {this.props.user.age}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);