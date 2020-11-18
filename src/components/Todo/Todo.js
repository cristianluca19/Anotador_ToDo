import React from 'react';


export function Todo(target) {

  return (
    <div class="card text-center m-4">
    <div class="card-header">
    {target.target.title}
    </div>
  <div class="card-body">
    <h5 class="card-title">{target.target.place}</h5>
  <p class="card-text">{target.target.description}</p>
  </div>
  <div class="card-footer text-muted">
    Creada por {target.target.created} el dia 
  </div>
</div>
  )
};

export default Todo;