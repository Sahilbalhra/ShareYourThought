import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
