import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Login from "./layout/Auth/Login";
import MainLayout from "./layout/Home/MainLayout";
import React from "react";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
