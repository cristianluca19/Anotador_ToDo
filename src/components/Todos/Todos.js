import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../Todo/Todo';

export default function Todos() {
  const Todos= useSelector(store=>store)
  console.log('aca',Todos)

  return (
    <div>
      {Todos.map(el => {
          return (
            <Link key={el.id} to={`/edit/${el.id}`}>
              <Todo title={el.title} />
            </Link>
          )
        }
      )}
    </div>
  )
}
