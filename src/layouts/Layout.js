import React from 'react';
import NavBar from '../components/Sidebar/NavBar';
import { Outlet } from "react-router-dom";

const Layout = ({ signOut }) => {
    return (
        <>
            <NavBar signOut={signOut}/>
            <div className="content">
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;
