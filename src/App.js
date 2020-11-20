import React from 'react'
import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';  
import About from './components/About' 
import './App.css';


// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className='App'>
      <Route path='/' render={()=><Nav/>}/>
      <Route exact path='/' render={()=><Home/>}/>
      <Route exact path='/about' render={()=><About/>}/> 
    </div>
  );
}

export default App;
