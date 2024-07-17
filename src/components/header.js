import { useState } from "react";
import Logo_App from "../assests/images/LOGO.jpg";
import {Link} from "react-router-dom";
const Logo = () => {
  return (
    <a href="/" className="logo">
      <img
        alt="logo"
        src={Logo_App}
        className="small-logo"
      />
    </a>
  );
};

const LoggedInUser = () =>{
    return true;
}

const Header = () => {

  const [isLoggedIn ,setLoggedInUser] = useState(true);
  return (

    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <Link to="/"><li><a href="/">Home</a></li></Link>
          <Link to="/about"><li><a href="/about">About Us</a></li></Link>
          <Link to="/contact"><li><a href="/contact">Contact Us</a></li></Link>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </div>

      {isLoggedIn ? <button onClick={() => setLoggedInUser(false)}>Logout</button> : <button onClick={() => setLoggedInUser(true)}>LogIn</button>}
    </div>
  );
};

export default Header;