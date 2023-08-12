import React from 'react';
import {  Navbar } from './components';
import { Customers,  Footer, Header} from './containers';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className='bg'>


        <Navbar/>
        <Header/>
      </div>  
      
      <Customers/>
      <Footer/>


    </div>
  )
  
}

export default App
