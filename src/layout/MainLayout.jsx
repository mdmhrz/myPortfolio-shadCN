import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../pages/Home/Home/Home';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;