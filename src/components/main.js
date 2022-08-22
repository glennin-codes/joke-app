import App from "../App"
export default function Main(props){
    
    {
        const nums =[1,2,3,4,5,6]
        nums.map((num)=>{
        
        const numSquared=num*num
        console.log(numSquared);
    })}
    return(
          <div className="app--main">
            <h3> Setup:{props.setup}</h3>
            <h4><b>punchline:</b>{props.punchline}</h4>
            <hr/>
          </div>
    )
}