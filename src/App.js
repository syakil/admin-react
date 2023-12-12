import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './layout/Auth/Login';
import MainLayout from './layout/Home/MainLayout';
import React from 'react';
import Dashboard from './page/dashboard/Dashboard';
import Product from './page/product/product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={ <MainLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="/product" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
