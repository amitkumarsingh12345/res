import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdmin = () => {
    const admin = localStorage.getItem('admin-login');
    return admin ? <Outlet/>: <Navigate to={'/admin-login'}/>
}
export default PrivateAdmin;