import { useState, useContext } from "react";
import Logo from "../assets/img/clipart-brain-mental-health-13.webp";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-20 p-2 " alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-sky-100 h-20">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2 font-bold">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="font-bold px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="font-bold px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="font-bold px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="font-bold px-2" data-testid="cart">
              Cart- {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>

      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>

      <span className="p-10 font-bold">{user.name}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="font-bold mr-5 my-4 shadow-md px-2 bg-red-300">Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="font-bold mr-5 my-4 shadow-md px-2 bg-green-200">Login</button>
      )}

    </div>
  );
};

export default Header;
