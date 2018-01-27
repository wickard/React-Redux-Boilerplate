import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {

    if (!this.props.user){
      return (<h2>Select a user </h2>)
    }
    return(
      <div>
        <h3>Name: {this.props.user.first} {this.props.user.last}</h3>
        <h3>Age: {this.props.user.age}</h3>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
