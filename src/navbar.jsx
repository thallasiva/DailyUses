import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    
    <nav className="navbar">
      
      <div className="logo">MyApp</div>
    

      <ul className="navLinks">
        <li><Link to="/home">Home</Link></li>   
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      
      <div className="Buttons">
        <button className="loginBtn">Login</button>
        <button className="signupBtn">Sign Up</button>
      </div>
    </nav>
  );
}
export default Navbar ;