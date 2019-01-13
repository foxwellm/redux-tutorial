import React, { Component } from 'react';
import '../styles/Main.scss';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Username List:</h2>
          <UserList></UserList>
          <hr/>
          <h2>User Details:</h2>
          <UserDetail></UserDetail>
      </div>
    );
  }
}

export default App;
