import React, { Component } from 'react';
import './App.css';
import UserRegister from "./components/UserRegister"
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"
import UserItem from "./components/UserItem"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserRegister />


      </div>
    );
  }
}

export default App;
