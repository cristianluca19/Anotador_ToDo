import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/index'

export default function AddTodo() {
  const dispatch = useDispatch()
  const [total, setTotal] = useState(false)
  const [input, setInput] = useState({
    created:'',
    init_date: new Date,
    description: '',
    place: '',
    title: '',
  });
  console.log(input.created)
 
  useEffect(() => {
    const {init_date, description,place,title,created} = input
   if(init_date  && description && place && title && created){
     setTotal(true)
   }
    
  },[total,input]);
  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch(action.addTodo(input))
    document.getElementById("miForm").reset()
    window.alert('Nota agregada')
    
  }
  return (
  
    <form onSubmit={handleOnSubmit} id="miForm">
  <div className="form-row">
    <div className="form-group col-md-5 m-2">
      <label >Titulo</label>
      <input type="text" className="form-control" name='title' placeholder="Comprar" onChange={handleChange}/>
    </div>
    <div className="form-group col-md-3 m-2">
      <label >Categoria</label>
      <select  name='place' className="form-control" onChange={handleChange}>
        <option defaultValue ='' >Elija una</option>
        <option value="Comida">Comida</option>
        <option value='Pagos'>Pagos</option>
        <option value='Compras'>Compras</option>
        <option value='Estudio'>Estudio</option>
        <option value='Mascotas'>Mascotas</option>
        <option value="Citas">Citas</option>
        <option value='Otras'>Otra</option>
      </select>
    </div>
  </div>
  <div className="form-group col-md-8">
    <label >Detalle</label>
    <textarea type="text" name='description' className="form-control"  placeholder="Comprar carne" onChange={handleChange}/>
  </div>
 
  <div className="form-row">
    <div className="form-group col-md-2">
      <label >Creada por:</label>
      <input type="text" className="form-control" name='created' onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group">
  </div>
  {total && <button type="submit" className="btn btn-primary" >Crear</button>}
  
  
</form>
  )
};

