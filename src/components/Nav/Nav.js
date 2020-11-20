import React from 'react';
import Notas from '../../img/Notas.png';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import * as action from '../../actions/index';

export default function Nav() {
  const dispatch = useDispatch();
  function handleAdd() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4', '5'],
    })
      .queue([
        {
          title: 'Titulo de la Nota',
          text: 'Ej: Comprar',
        },
        {
          input: 'textarea',
          inputLabel: 'Detalle',
          inputPlaceholder: 'Comprar carne para el asado del domingo...',
          inputAttributes: {
            'aria-label': 'Type your message here',
          },
        },
        {
          title: 'Seleccione categoria',
          input: 'select',
          inputOptions: {
            Compras: 'Compras',
            Comida: 'Comida',
            Pagos: 'Pagos',
            Estudio: 'Estudio',
            Mascotas: 'Mascotas',
            Citas: 'Citas',
            Otras: 'Otras',
          },
        },
        {
          title: 'Que tan importante es?',
          icon: 'question',
          input: 'range',
          inputAttributes: {
            min: 1,
            max: 100,
            step: 1,
          },
          inputValue: 1,
        },
        {
          title: 'Ingrese su nombre',
          input: 'text',
          inputPlaceholder: 'Cristian',
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          console.log(answers);
          if (answers.includes(false)) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Te falto completar algun dato!',
              footer: '<a href>Why do I have this issue?</a>',
            });
          } else {
            Swal.fire('Buen Trabajo!', 'Su nota fue agregada!', 'success');
            dispatch(action.addTodo(answers));
          }
        }
      });
  }

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
        <div className='container'>
          <h5 className='row justify-content-center justify-content-md-start m-2'>
            Notes App
          </h5>
        </div>
        <div className=' navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav mr-sm-auto '>
            <button
              className='btn btn-outline-info m-2'
              type='button'
              onClick={() => handleAdd()}>
              <i className='fas fa-notes-medical'> Agregar</i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
