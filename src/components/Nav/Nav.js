import React from "react";
import Notas from "../../img/Notas.png";

export default function Nav() {
  return (
    <div>
      <nav class='navbar navbar-expand navbar-light bg-light'>
        <img
          src={Notas}
          width={100}
          class='d-inline-block align-top'
          alt='notas'
          loading='lazy'
        />
        <div class="container">
        <h5 class='row justify-content-center justify-content-md-start m-2'>Notes App</h5>
        </div>
        <div class=' navbar-collapse' id='navbarSupportedContent'>
          <div class='navbar-nav mr-sm-auto '>
            <a class='btn btn-outline-info m-2' href='/' role='button'>
              <i class='fas fa-clipboard'> Ver</i>
            </a>
            <a class='btn btn-outline-info m-2' href='/add' role='button'>
              <i class='fas fa-notes-medical'> Agregar</i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
