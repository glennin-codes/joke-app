import './style.css'
import {React} from 'react';
export default function Box(props){
  
   const  styles={
          backgroundColor:props.on? "white" : "#222222",
          
    }
    return(
        
        <main >
            <div className='optimum'>
               <div className="box"  style={styles} onClick={props.handleClick}></div>
            </div>

        </main>
    )
}