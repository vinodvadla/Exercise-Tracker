import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../Hooks/useUserContext";

export const Navbar = () => {
  let { user, setUser } = useUserContext();
  const logoutUser = () => {
    setUser(null);
  };
  return (
    <div className="w-[100vw] h-16 bg-blue-300 flex items-center justify-between px-10">
      <div className="w-[100px] h-[80%] flex items-center justify-center">
        <NavLink to={"/"}>
          <h1 className=" text-2xl text-white font-extrabold cursor-pointer">
            Track'O
          </h1>
        </NavLink>
      </div>
      <div className="w-[180px] h-[80%] flex items-center justify-evenly">
        {!user ? (
          <div className=" w-full flex items-center justify-center gap-3">
            <NavLink
              to={"/login"}
              className={({ isActive }) => {
                return isActive ? "text-red-700" : "text-white";
              }}
            >
              <button className="lg:text-xl md:text-lg text-md font-bold">
                Login
              </button>
            </NavLink>
            <NavLink
              to={"/signup"}
              className={({ isActive }) => {
                return isActive ? "text-red-700" : "text-white";
              }}
            >
              <button className="lg:text-xl md:text-lg text-md font-bold">
                Signup
              </button>
            </NavLink>
          </div>
        ) : (
          <div className=" w-full flex items-center justify-center gap-6">
            <button className="lg:text-xl md:text-lg text-md font-bold">
              <h1 className="text-sm text-red font-bold"> {user.user.name}</h1>
            </button>
            <button
              onClick={logoutUser}
              className="lg:text-xl md:text-lg text-md font-bold"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
