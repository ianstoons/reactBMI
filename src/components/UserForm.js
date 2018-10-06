//// Datos del usuario
import React, { Component } from 'react';

class UserForm extends Component {

  render = () => {
    return (
      <form>
        <input type="text" placeholder="Nombre" class="textbox" />
        <input type="text" placeholder="Apellido" class="textbox" />
        <input type="text" placeholder="Correo" class="textbox" />
        <input type="button" value="Registrar" class="button" />
      </form>
    )
  }
}

export default UserForm
