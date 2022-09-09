import {React, useState} from 'react'
import {Puns} from "./joke-product"
import "./joker.css"
export default function Jokes() {
     

        const [show,setShow]=useState(Puns)
          
          function toggle(id){
            console.log(id);
                setShow(prevShow=>{
                  return prevShow.map((pun)=>{
                    return pun.id===id? {...pun, state:!pun.state}:pun 
                    
                  })
                  
                  
                })
              
            }
          
          
     return (
      <nav className="main--wrapper">
          {show.map((product) => { 
                return (
                       
                           
                                 <div className="main-contents" key={product.id}>
                                          <h2 className="setup--line">Setup: {product.setup}</h2>
                                          {product.state && <h4 className="punch--line">Punchline: {product.punchline}</h4>}
                                          <button className="view--btn" onClick={()=>toggle(product.id)}>{product.state?'HIDE':'VIEW'} PUNCHLINE</button>
                                 </div>
                       
                      
                )
             })
          }
        </nav>
           )
    
}

