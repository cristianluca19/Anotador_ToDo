import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Todo.css'

export function Todo(ids) {
  const tarjetas = useSelector(store=>store)
  const target = tarjetas.filter(({id}) => id !== ids)
  let inicio = target[0].init_date;
  console.log('target',target[0])
  let clase =''
  let boton 
  let value
  switch(target[0].status){
  case 'todo':
    clase = "card card1 border-info mb-3 mt-4"
    boton = "btn btn-outline-info"
    value = 'Reviews'
    break;
  case 'reviews':
    clase = "card card1 border-info mb-3 mt-4"
    boton = "btn btn-outline-success"
    value = 'Done'
    break
  case 'done' :
    clase = "card card1 border-info mb-3 mt-4"
    boton = "btn btn-outline-danger"
    value = 'Eliminar'
    break
  }

  return (
    <div className={clase} >
      <Link to='/home'><i class="fas fa-arrow-left"></i></Link>
      <div className="card-header">{target[0].title}</div>
      <div className='card-body'>
        <h5 className='card-title'>{target[0].place}</h5>
        <p className='card-text'>{target[0].description }</p>
      </div>
      <div className='card-footer text-muted'>
        Creada por <h6>{target[0].created}</h6> el dia {inicio.getDate()}/
        {inicio.getMonth()}/{inicio.getFullYear()}
      </div>
      <button className={boton}>{value}</button>
    </div>
  );
}

export default Todo;
