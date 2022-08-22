import {props } from "./footer-props";
export default function Footer(){
    return (
            <footer className="app--footer">
                 <div className="footer--info">
                        <h2>airbnb</h2>
                        <h3>contact us</h3>
                 </div>
               
               {props.map((prop)=>{
                     return(
                        <div>
                           
                        <div key={prop.id} className="app--contact-logos">
                              <img
                              src={prop.img}
                              alt={prop.alt}
                              className="contact--logos"
                            />  
                        <p><small>{prop.statement}</small></p>
                        </div>
                       </div>
                     )
                })
        }
                    
                  
            </footer>
    )
}