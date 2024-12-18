import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    time: ""
  });

  useEffect(() => {
    localStorage.removeItem('action');
  }, []);

  const userHandler = event => {
    console.log(event.target.time)
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const submitHandler = async event => {
    event.preventDefault();
    const user_data = await axios.post(`${window.location.origin}/api/v5/chat/create`, user);
    if (user_data?.data.Massage == 'success') {
      localStorage.setItem('action', JSON.stringify(`Thanks '${user.name}', For visiting our website your, Mostly welcome`))
      localStorage.setItem('auth', JSON.stringify('success'));
      // navigate('/');
    }

  }

  const cancelHandler = async () => {
    // localStorage.setItem('visit', JSON.stringify(1));
    // navigate('/');

    const result = await axios.get(`${window.location.origin}/api/v5/chat/find`);
    console.log(result);
  }

  return (
    <div className="container p-0" style={{
      borderRadius: '5px',
      marginTop: '100px',
      maxWidth: '500px'
    }}>
      <div className='d-flex justify-content-center'>
        <img src="/metro-logo.jpg" alt="..." style={{ maxHeight: '200px', maxWidth: '200px' }} />
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={submitHandler} className="p-2 p-md-5 mt-2" style={{
            borderRadius: '5px',
          }}>
            <div className='row'>
              <div className="col-12">
                <label htmlFor="yourName" className="form-label">Name</label>
                <input type="text" name="name"
                  value={user.name}
                  onChange={userHandler} className="form-control"
                  required="true"
                />
              </div>
            </div>


            <div className='row'>
              <div className="col-12">
                <label htmlFor="yourName" className="form-label">Phone</label>
                <input type="text" name="phone"
                  value={user.phone}
                  onChange={userHandler}
                  className="form-control"
                  required="true"
                />
              </div>
            </div>

            <div className='row'>
              <div className="col-12">
                <label htmlFor="yourName" className="form-label">Address</label>
                <input type="text" name="address"
                  value={user.address}
                  onChange={userHandler}
                  className="form-control"
                  required="true"
                />
              </div>
            </div>

            <div className='row'>
              <div className="col-12">
                <label htmlFor="yourName" className="form-label">Time</label>
                <input type="time" name="time"
                  value={user.time}
                  onChange={userHandler}
                  className="form-control"
                  required="true"
                />
              </div>
            </div>

            <div className='row mt-3'>

              <div className='col-6'>
                <div className="d-grid gap-2">
                  <Button type='submit' variant="dark">
                    Register
                  </Button>
                </div>
              </div>
              <div className='col-6'>
                <div className="d-grid gap-2">
                  <Button variant="dark" onClick={cancelHandler}>
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Chat;