import React from 'react'
import Header from './components/header';
import Footer from './components/footer'
import './App.css';
import Box from './components/box';
import boxComponents from './components/boxComponents';
export  default function App() {
      const [squares, setSquares] = React.useState(boxComponents)
      const items = squares.map(square=>(
            <Box 
             key={square.id }
             on={square.on} 
             handleClick={()=>toggle(square.id)}
            
             />
      ))
      function toggle(id){
           setSquares((prevSquares)=>{
            return prevSquares.map((square)=>{
                  return square.id===id ? {...square,on:!square.on} : square
            })
           })
                
      }
    return (
          <div>
                   <Header />
                    {items }   
                   <Footer />
                 
         </div>
   )
}

