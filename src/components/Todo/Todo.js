import React from "react";

export function Todo(target) {
  let inicio = target.target.init_date;
  return (
    <div class='card text-center m-4'>
      <div class='card-header'>{target.target.title}</div>
      <div class='card-body'>
        <h5 class='card-title'>{target.target.place}</h5>
        <p class='card-text'>{target.target.description.substring(20) + '...' }</p>
      </div>
      <div class='card-footer text-muted'>
        Creada por <h6>{target.target.created}</h6> el dia {inicio.getDate()}/
        {inicio.getMonth()}/{inicio.getFullYear()}
      </div>
    </div>
  );
}

export default Todo;
