import Count from "./count";
import React from "react"
import "./main.css"
export default function Main(){
  const [count , setCount]= React.useState(0)
    function add () {
           setCount(prevCount=>prevCount+1)
    }
    function subtract(){
        setCount(prevCount=> prevCount-1)
    }
    return(
        <main className="app--wrapper"> 
            <div className="counter">
               <button className="counter--minus"  onClick={subtract}>-</button>
                <Count number={count}/>
               <button className="counter--plus" onClick={add}>+</button>
            </div>
        </main>
    
    )

}
