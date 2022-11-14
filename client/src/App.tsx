import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import PostDetail from "./components/Post/PostDetails";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/:id' element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default App;
