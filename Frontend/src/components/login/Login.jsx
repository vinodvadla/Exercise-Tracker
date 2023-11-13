import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../../Hooks/useUserContext";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(null);
  let { user, setUser } = useUserContext();
  let navigate = useNavigate();
  let loginUser = async () => {
    try {
      let res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      setError(null);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="w-[100vw] h-[88vh] flex items-center justify-center">
      <div className="w-[300px] h-[350px] bg-white rounded shadow-md border border-gray-200 ">
        <div className="w-full h-full shadow-md rounded border border-gray-200 flex flex-col items-center pt-4 justify-evenly">
          <h1 className="text-blue-600 text-xl font-bold">Login</h1>
          <p className="text-xs text-red-400">{error ? error : ""}</p>
          <div className="w-full flex items-center flex-col gap-4">
            <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
              <div className="w-[15%] h-full flex items-center justify-center">
                <HiOutlineMail size={20} />
              </div>
              <div className="w-[80%] h-full">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full h-full text-md border-none outline-none font-semibold"
                />
              </div>
            </div>
            <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
              <div className="w-[15%] h-full flex items-center justify-center">
                <MdPassword size={20} />
              </div>
              <div className="w-[80%] h-full">
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full h-full text-md border-none outline-none font-semibold"
                />
              </div>
            </div>
          </div>
          <button
            onClick={loginUser}
            className="w-[100px] active:shadow-lg h-[40px] bg-blue-400 text-white font-bold rounded border border-gray-200 shadow-md"
          >
            Login
          </button>
          <h1 className="text-sm font-bold">
            Don't have an Account?{" "}
            <NavLink to={"/signup"}>
              <span className="text-red-600">Signup</span>
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
