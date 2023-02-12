import { useContext } from "react";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";





const Footer = () => {
  const { user } = useContext(UserContext);
  const isOnline = useOnline();


  return (
    <h4 className="p-10 m-10">
      This site is developed by {user.name} - {user.email} {isOnline ? "✅" : "🔴"}
    </h4>
  );
};

export default Footer;
