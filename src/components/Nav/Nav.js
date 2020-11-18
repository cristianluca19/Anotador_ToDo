import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Notas from "../../img/Notas.png";

export default function Nav() {
  const estado = useSelector(store=>store)

  return (
    <div>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <img
          src={Notas}
          width={100}
          className='d-inline-block align-top'
          alt='notas'
          loading='lazy'
        />
        <div className="container">
        <h5 className='row justify-content-center justify-content-md-start m-2'>Notes App</h5>
        </div>
        <div className=' navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav mr-sm-auto '>
            <Link to='/home'>
            <button className='btn btn-outline-info m-2' role='button'>
              <i className='fas fa-clipboard'> Ver</i>
            </button>
            </Link>
            <Link to='/add'>
            <button className='btn btn-outline-info m-2' role='button'>
              <i className='fas fa-notes-medical'> Agregar</i>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
