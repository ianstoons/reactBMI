//Lista de usuarios

import React, { Component } from 'react';
import UserItem from "./UserItem"

class UserList extends Component {
  render = () => {
    return (
      <div>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    )

  }
}

export  default UserList
