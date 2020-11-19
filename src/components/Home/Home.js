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
    case 'finish':
      reviews.push(t)
      break
    case 'done' :
      done.push(t)
      break}
  })
 
  return (

    <div class="container-fluid">
    <div class="row">
        <div class="col-sm">
        <div class='card text-center card-header'>Para ver</div>
         {todo.map(t=>{return <Todos target={t}/>}) }
        </div>
        <div class="col-sm">
        <div class='card text-center card-header'>Revisar</div>
        {reviews.map(t=>{return <Todos target={t}/>}) }
        </div>
        <div class='card text-center card-header'>Completas</div>
        <div class="col-sm">
        {done.map(t=>{return <Todos target={t}/>}) }
        </div>
    </div>
</div>
  )
};

export default Home;