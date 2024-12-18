import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteHotal = () => {
    const params = useParams();
    const navigate = useNavigate();

    const deleteHotalHandler = async () => {
        const result = await axios.delete(`${window.location.origin}/api/v4/hotal/delete/${params.id}`);
        if (result?.data?.deletedCount) {
            localStorage.setItem('action', JSON.stringify('One recard deleted successfully!!'))
            navigate('/hotal');
        }
    }

    useEffect(() => {
        localStorage.removeItem('action');
        deleteHotalHandler();
    }, [])
}
export default DeleteHotal;