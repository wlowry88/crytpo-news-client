import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render () {
    var person = this.props;
    function fullName (person) {
      return person.firstName + ' ' + person.lastName;
    }
    return (
      <h2>Welcome to Stoic Reminders, brought to you by {fullName(person)}</h2>
    )
  }
}

export default WelcomeMessage;