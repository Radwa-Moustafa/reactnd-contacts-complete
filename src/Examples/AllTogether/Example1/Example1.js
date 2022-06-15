import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';

class Example1 extends Component {
  state = {
    users: [],
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.createContact} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Example1;
