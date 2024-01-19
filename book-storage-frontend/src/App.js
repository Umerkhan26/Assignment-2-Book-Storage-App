
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Auth/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Search from "./components/Auth/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  
  return (
    <div className="app-container container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        {/* Search component is placed outside Routes, it will be rendered on all pages */}
       
      </Router>
    </div>
  );
};

export default App;
