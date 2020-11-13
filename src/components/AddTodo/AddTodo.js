import React from 'react';

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo() {
  return (
    <div>
      Componente AddTodo
    </div>
  )
};

export default AddTodo