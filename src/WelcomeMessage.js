import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render () {
    function fullName (props) {
      return props.firstName + ' ' + props.lastName;
    }
    return (
      <h2>Welcome to Crypto News, brought to you by {fullName(this.props)}</h2>
    )
  }
}

export default WelcomeMessage;