import { NavLink } from "react-router-dom";
import logo from "../img/logo1.png";
import profileIcon from "../img/profile-icon.png";

function MainNavigation() {
  return (
    <nav className="bg-gray-200 flex justify-between items-center">
      <div className="flex items-center ms-9">
        <img src={profileIcon} className="h-10 w-10" />
        <NavLink to="/user" className="ml-2 text-gray-700">
          Username
        </NavLink>
      </div>
      <div>
        <img src={logo} className="h-10" />
      </div>
      <div className="flex space-x-2 justify-between me-12">
        <NavLink to="/cart">Cart</NavLink>
        <div className="w-8 h-8 bg-red-600 rounded-full">
          <span className="purchase-number"></span>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
