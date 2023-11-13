import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  const signupUser = async () => {
    try {
      let res = await axios.post("http://localhost:5000/user/signup", {
        name,
        email,
        password,
      });
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <div className="w-[100vw] h-[88vh] flex items-center justify-center">
      <div className="w-[300px] h-[350px] bg-white rounded shadow-md border border-gray-200 ">
        <div className="w-full h-full shadow-md rounded border border-gray-200 flex flex-col items-center pt-4 justify-evenly">
          <h1 className="text-blue-600 text-xl font-bold">Signup</h1>
          <p className="text-xs text-red-400">{error ? error : ""}</p>
          <div className="w-full flex items-center flex-col gap-4">
            <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
              <div className="w-[15%] h-full flex items-center justify-center">
                <HiOutlineMail size={20} />
              </div>
              <div className="w-[80%] h-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name"
                  className="w-full h-full text-md border-none outline-none font-semibold"
                />
              </div>
            </div>
            <div className="w-[90%] h-[45px] rounded shadow-sm border flex items-center justify-center border-gray-200">
              <div className="w-[15%] h-full flex items-center justify-center">
                <HiOutlineMail size={20} />
              </div>
              <div className="w-[80%] h-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="w-full h-full text-md border-none outline-none font-semibold"
                />
              </div>
            </div>
          </div>
          <button
            onClick={signupUser}
            className="w-[100px] h-[40px] bg-blue-400 text-white font-bold rounded border border-gray-200 shadow-md"
          >
            signup
          </button>
          <h1 className="text-sm font-bold">
            Have an Account?{" "}
            <NavLink to={"/login"}>
              <span className="text-red-600">Login</span>
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
