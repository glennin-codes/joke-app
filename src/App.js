import React from 'react'
import Header from './components/header';
import Footer from './components/footer'
import './App.css';
import Jokes from './components/joke';

export  default function App() {
  
    return (
          <div>
                   <Header /> 
                   <Jokes  />
                   <Footer />
                 
         </div>
   )
}

