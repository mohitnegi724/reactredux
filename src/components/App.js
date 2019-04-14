import React, { Component } from 'react';
import UserList from '../containers/userlist';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr/>
        <h2>User Detail:</h2>
      </div>
    );
  }
}


export default App;
