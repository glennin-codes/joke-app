
 import './header.css';
 import logo from"../images/airbnb-logo_brandlogos.net_vb6uh.png";
 import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faBell} from '@fortawesome/free-solid-svg-icons'
 import React ,{useState} from 'react';
 import { Puns } from './joke-product';
export default function Header(){
     const [messages, setMessages] = useState(Puns)
     const [hotkins,sethotkins] =useState()
     const [power,setpower] =useState(false)
     function Offer (){
                  return(
                    sethotkins(<div className='messages'>
                    {
                    messages.length === 0? <h5 className='memo'> no recent notification</h5>:<h5 className='memo'> you have {messages.length} new {messages.length>1 ? "notifications":"notification"}</h5>

                   }
                   </div>
                    

                   )

                  )
          }
          function freeOffer(){
               return (
                   setpower(prevpower=>!prevpower)
               )
          }

    return (
    
          <header className="app--header" >
                    <img
                         src={logo}
                         alt="app logo"
                         className="app--logo"
                    />
                    <h1 className="app--name">using states</h1>
                    <h2 className="app--title"><a href="/blogs/">blogs</a></h2>
                    <h2 className="app--title"><a href="/site/">sites</a></h2>
                    <h2 className="app--title"><a href="/about us/">obout us</a></h2>
                    <h4 className="project--info">partial-project-001</h4>
                    <div className='bell--product'>
                    <FontAwesomeIcon className='bell--icon' icon={faBell} onMouseOut={freeOffer} onMouseEnter={Offer}></FontAwesomeIcon>
                    <span className='counter' >{messages.length }</span>
                    </div>
                     {hotkins}
                     {power && !hotkins}
                          
            
                    
          </header>
     )
}

