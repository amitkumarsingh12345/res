import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const navigate = useNavigate("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [qty, setQty] = useState(1);
    const [discription, setDiscription] = useState("");

    useEffect(() => {
        localStorage.removeItem('action');
    }, []);

    const addHandler = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('qty', qty);
        formData.append('discription', discription);
        formData.append('image', image);

        let result = await axios.post(`${window.location.origin}/api/v3/thali/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (result?.data) {
            localStorage.setItem('action', JSON.stringify('New recard added successfully!!'))
            navigate('/');
        }
    }

    const cancelHandler = () => {
        navigate('/');
    }

    return (
        <div className="container p-0" style={{ marginTop: '80px' }}>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className='container'>
                        <form onSubmit={addHandler} method="" className="p-2 p-md-5 mt-2" style={{
                            borderRadius: '5px',
                        }}>
                            <h3 className="text-center">Add food</h3>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="yourName" className="form-label">Name</label>
                                    <input type="text" name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="yourName" className="form-label">Price</label>
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
                                    <label htmlFor="yourName" className="form-label">Image</label>
                                    <input type="file" name="image"
                                        onChange={(event) => setImage(event.target.files[0])}
                                        className="form-control"
                                        required="true"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="yourName" className="form-label">Qty</label>
                                    <input type="number" name="qty"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor="yourName" className="form-label">Items</label>
                                    <input type="text" name="discription"
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
                                            Add
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
    )
}
export default AddFood;