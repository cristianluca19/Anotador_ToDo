import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/index'

export default function AddTodo() {
  const dispatch = useDispatch()
  const esto = useSelector(store=> store)
  const [input, setInput] = useState({
    date: '',
    description: '',
    place: '',
    title: ''
  });

  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log('anda')
    dispatch(action.addTodo(input))
  }
  console.log(esto)
  return (
  
    <form class="form-column aling-conten-center">
  <div class="form-flex justify-content-center">
    <div class="form-group col-md-5 m-2">
      <label for="inputEmail4">Titulo</label>
      <input type="title" class="form-control"  placeholder="Comida"/>
    </div>
    <div class="form-group col-md-5 m-2">
      <label for="inputPassword4">Detalle</label>
      <textarea class="form-control" aria-label="With textarea" placeholder="Comprar carne"></textarea>
    </div>
  </div>
  <div class="form-row aling-item-center">
  <div class="form-group m-2 ">
    <label >Creado</label>
    <input type="date" class="form-control"/>
  </div>
  <div class="form-group m-2">
    <label >Eliminar</label>
    <input type="date" class="form-control"/>
  </div>
  </div>

  <button type="submit" class="btn btn-primary">Guardar</button>
</form>

// =============================================================================================
//     <form onSubmit={handleOnSubmit}>
//       <input name='title' onChange={handleChange}></input>
//       <textarea name='description' onChange={handleChange}></textarea>
//       <input name='place' onChange={handleChange}></input>
//       <input name='date' onChange={handleChange}></input>
//       <button type='submit'>Send</button>
//     </form>
  )
};

