import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo1.png";
import profileIcon from "../img/profile-icon.png";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUser } from "../store/reducers/user-slice";

function MainNavigation() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <nav className="bg-gray-200 flex justify-between items-center h-12">
      <div className="flex items-center ms-9">
        <NavLink to="/user" className="flex">
          <img src={profileIcon} className="h-8 w-8" />
          <span className="ml-2 text-gray-700">
            Hi, {user.user?.name.firstname}
          </span>
        </NavLink>
      </div>
      <NavLink to="/">
        <img src={logo} className="h-10" />
      </NavLink>
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
