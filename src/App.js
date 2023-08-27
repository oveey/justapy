import React from 'react';
import {  Navbar } from './components';
import { Customers,  Footer, Header} from './containers';
import './App.css';



const App = () => {
  return (
    <div className="app">
      <div className='gradient__bg'>


        <Navbar/>
        <Header/>

        <Customers/>
        <Footer/>
      </div>  
      
      


    </div>
  )
  
}

export default App
