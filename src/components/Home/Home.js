import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../Todos/Todos'

export function Home() {
  const tarjetas = useSelector(store=>store)
  let done=[]
  let reviews=[]
  let todo=[]
  console.log('tarjetas', tarjetas)
  console.log('done', done)
  console.log('todo', todo)
  console.log('reviews', reviews)

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
 
  return (

    <div class="container">
    <div class="row">
        <div class="col col-4">
        <div class='card text-center card-header'>Para ver</div>
        <ul class="list-group list-group-flush">
         {todo.map(el=>{return <li class="list-group-item" key={el.title}><Todos el={el} clase=' text-center bg-warning text-dark'/></li> }) }
        </ul>
        </div>
        <div class="col col-4">
        <div class='card text-center card-header'>Revisar</div>
        {reviews.map(t=>{return <Todos el={t} clase='card text-center card-header bg-success text-dark'/>}) }
        </div>
        <div class="col col-4">
        <div class='card text-center card-header'> Completas </div>
        {done.map(t=>{return <Todos el={t} clase='card text-center card-header bg-danger text-dark'/>}) }
        </div>
    </div>
</div>
  )
};

export default Home;