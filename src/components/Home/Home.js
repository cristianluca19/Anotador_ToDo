import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../Todos/Todos'

export function Home() {
  const tarjetas = useSelector(store=>store)
 
  return (
    <div>
      <Todos status='Todo'/>
      <Todos status='InProgress'/>
      <Todos status='Done'/>
      <Todos />
    </div>
  )
};

export default Home;