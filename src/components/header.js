import logo from "../images/logo512.png"
export default function Header(){
    return (
          <header className="app--header">
                    <img
                         src={logo}
                         alt="app logo"
                         className="app--logo"
                    />
                    <h1 className="app--title">airbnb</h1>
                    <h4 className="project--info">project-002</h4>
          </header>
     )
}

