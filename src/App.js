import React from 'react';
import {  Navbar } from './components';
import { Customers,  Footer, Header} from './containers';
import './App.css';
import 'animate.css';



const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>


        <Navbar/>
        <Header/>
      </div>  
      
      <Customers/>
      <Footer/>


    </div>
  )
  
}

export default App
