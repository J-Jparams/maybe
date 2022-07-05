import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pages/page1/" element={<Page1/>} />
                <Route path="/pages/page2" element={<Page2 />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch