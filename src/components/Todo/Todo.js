import React from 'react';
import {useSelector } from 'react-redux';

export function Todo(title) {

console.log('esatdo en todo',title)
  return (
    <div>
      {title}
    </div>
  )
};

export default Todo;