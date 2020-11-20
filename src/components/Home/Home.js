import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../Todos/Todos'

export function Home() {
  const tarjetas = useSelector(store=>store)
  let complete=[]
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
    case 'complete' :
      complete.push(t)
      break}
    })
    
    const target_todo=  todo.map(target=>{return <li className='list-group-item' key={target.id}><Todos el={target} clase=' btn btn-block text-center bg-info text-dark'/></li> }) 
    const target_reviews= reviews.map(target=>{return <li className='list-group-item' key={target.id}><Todos el={target} clase='btn btn-block text-center bg-success text-dark'/></li>}) 
    const target_complete = complete.map(target=>{return <li className='list-group-item' key={target.id}><Todos el={target} clase='btn btn-block text-center  bg-danger text-dark'/></li>}) 
  return (

    <div className='container'>
    <div className='row'>
        <div className='col col-4'>
        <div className='card text-center card-header'>Para ver</div>
        <ul className='list-group list-group-flush'>
         {target_todo}
        </ul>
        </div>
        <div className='col col-4'>
        <div className='card text-center card-header'>Revisar</div>
        <ul className='list-group list-group-flush'>
        {target_reviews}
        </ul>
        </div>
        <div className='col col-4'>
        <div className='card text-center card-header'> Completas </div>
        <ul className='list-group list-group-flush'>
        {target_complete}
        </ul>
        </div>
    </div>
</div>
  )
};

export default Home;