import { react } from "react";
import "./main.css"
export default function Main(){
    return(
        <main className="app--wrapper"> 
            <form className="app--form">
                  <nav className="input--info">
                     <input type="text" 
                            className="form--input"   
                            
                     />
                     <input type="text" 
                            className="form--input"  
                            placeholder="enter some words"
                     />
                   <nav className="button--info">
                            <button className="form--button">
                              Get a new meme image
                            </button>
                   </nav>
                  </nav>
            </form>
        
        </main>
    )

}