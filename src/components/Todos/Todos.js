import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../Todo/Todo';

export default function Todos() {
  const todos= useSelector(store=>store)


  return (
    <div>
      {todos.map(el => 
          <div>
            <Link key={el.id} to={`/edit/${el.id}`}>
              <Todo target={el} />
            </Link>
          </div>
        
      )}
    </div>
  )
}
