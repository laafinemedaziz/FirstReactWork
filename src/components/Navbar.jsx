import Logo from "../images/React.jpg"
export default function Navbar(){
    return(
        <nav className="navbar">
        <img src= {Logo} width="30px" rel="React Logo"/>
        <h2 className="nav--title">ReactFacts</h2>
        <h4>React Course - project 1</h4>
        </nav>
    )
}