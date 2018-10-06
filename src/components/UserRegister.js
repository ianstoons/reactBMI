//registro de todo
import React, { Component } from 'react';
import UserForm from "./UserForm"
import UserList from "./UserList"


class UserRegister extends Component {

  render = () => {

    return (
      <div>
        <UserForm />
        <UserList />

      </div>
    )
  }
}

export default UserRegister
