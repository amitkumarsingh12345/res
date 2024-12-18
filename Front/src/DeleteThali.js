import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DeleteThali = () => {
    const params = useParams();
    const navigate = useNavigate();

    const deleteThaliHandler = async () => {
        const result = await axios.delete(`${window.location.origin}/api/v3/thali/delete/${params.id}`);
        if (result?.data?.deletedCount) {
            localStorage.setItem('action', JSON.stringify('One recard deleted successfully!!'))
            navigate('/');
        }
    }

    useEffect(() => {
        localStorage.removeItem('action');
        deleteThaliHandler();
    }, [])
}
export default DeleteThali;