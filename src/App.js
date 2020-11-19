import React from 'react'
import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import AddTodo from './components/AddTodo/AddTodo'
import './App.css';


// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className="App">
      <Route path='/' render={()=><Nav/>}/>
      <Route exact path='/home' render={()=><Home/>}/>
      <Route exact path='/add' render={()=><AddTodo/>}/>
      {/* <Route exact path='/edit/:id' render={({ match })=><Todo id={match.params.id}/>}/> */}
    </div>
  );
}

export default App;
