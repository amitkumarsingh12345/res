import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


const EditThali = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null); // Changed to null to handle file input better
    const [qty, setQty] = useState("");
    const [discription, setDiscription] = useState(""); // Fixed spelling

    const findHandler = async () => {
        try {
            const { data } = await axios.get(`${window.location.origin}/api/v3/thali/search/${params.id}`);
            if (data && data.length > 0) {
                setName(data[0].name);
                setPrice(data[0].price);
                setImage(data[0].image);
                setQty(data[0].qty);
                setDiscription(data[0].discription); // Fixed spelling
            }
        } catch (error) {
            console.error("Error fetching thali details:", error);
        }
    };

    useEffect(() => {
        localStorage.removeItem('action');
        findHandler();
    }, []);

    const cancelHandler = () => {
        navigate('/');
    };

    const editHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("qty", qty);
        formData.append("discription", discription); // Fixed spelling
        if (image) {
            formData.append("image", image);
        }

        try {
            await axios.put(`${window.location.origin}/api/v3/thali/update/${params.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            localStorage.setItem('action', JSON.stringify('One recard updated successfully!!'))
            navigate('/');
        } catch (error) {
            console.error("Error updating thali:", error);
        }
    };

    return (
        <div className="container p-0" style={{ marginTop: '90px' }}>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className='container'>
                        <form className=" p-2 p-md-5 mt-2" style={{
                            borderRadius: '5px',
                        }} onSubmit={editHandler}>
                            <h3 className="text-center">Update food</h3>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Thali name</label>
                                    <input type="text" name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" name="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="qty" className="form-label">Qty</label>
                                    <input type="number" name="qty"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" name="image"
                                        onChange={(event) => setImage(event.target.files[0])}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" name="description"
                                        value={discription}
                                        onChange={(e) => setDiscription(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="d-grid gap-2">
                                        <Button type='submit' variant="dark">
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="d-grid gap-2">
                                        <Button variant="secondary" onClick={cancelHandler}>
                                            Close
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditThali;
