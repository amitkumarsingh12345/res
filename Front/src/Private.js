import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
    const auth = localStorage.getItem('auth');
    const visit = localStorage.getItem('visit');
    return auth || visit ? <Outlet/>: <Navigate to={'/user'}/>
}
export default Private;