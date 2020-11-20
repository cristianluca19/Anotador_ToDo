import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../Todos/Todos'

export function Home() {
  const tarjetas = useSelector(store=>store)
  let done=[]
  let reviews=[]
  let todo=[]
  
  tarjetas.map( t=> 
    {switch(t.status){
    case 'todo':
      todo.push(t)
      break;
    case 'reviews':
      reviews.push(t)
      break
    case 'done' :
      done.push(t)
      break}
    })
    
    const target_todo=  todo.map(target=>{return <li className="list-group-item" key={target.id}><Todos el={target} clase=' text-center bg-info text-dark'/></li> }) 
    const target_reviews= reviews.map(target=>{return <li className="list-group-item" key={target.id}><Todos el={target} clase='card text-center card-header bg-success text-dark'/></li>}) 
    const target_done = done.map(target=>{return <li className="list-group-item" key={target.id}><Todos el={target} clase='card text-center card-header bg-danger text-dark'/></li>}) 
  return (

    <div className="container">
    <div className="row">
        <div className="col col-4">
        <div className='card text-center card-header'>Para ver</div>
        <ul className="list-group list-group-flush">
         {target_todo}
        </ul>
        </div>
        <div className="col col-4">
        <div className='card text-center card-header'>Revisar</div>
        {target_reviews}
        </div>
        <div className="col col-4">
        <div className='card text-center card-header'> Completas </div>
        {target_done}
        </div>
    </div>
</div>
  )
};

export default Home;