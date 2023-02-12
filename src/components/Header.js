import { useState, useContext } from "react";
import Logo from "../assets/img/food-order-icon.webp";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-20 p-2 ml-2 rounded-full ring-1 ring-gray-300" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between h-20 bg-sky-600 text-white">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2 font-bold">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="font-bold px-2">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="font-bold px-2">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="font-bold px-2" data-testid="cart">
              Cart- {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>

      <span className="p-10 font-bold">{isLoggedIn? user.name: ``}</span>



      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="font-bold mr-5 my-4 shadow-md px-1 bg-red-400 transition delay-250 rounded-lg w-24 h-10">Logout</button>  
      ) : (
        <Link to="/login">
        <button onClick={() => setIsLoggedIn(true)} className="font-bold mr-5 my-4 shadow-md px-1 bg-green-400 transition delay-250 rounded-lg w-24 h-10">Login</button>
        </Link>
      )}

    </div>
  );
};

export default Header;
