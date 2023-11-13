import React from "react";
import { Navbar } from "./components/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup/Signup";
import { useUserContext } from "../Hooks/useUserContext";

const App = () => {
  const { user } = useUserContext();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
