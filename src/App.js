import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [state, setState] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setState( (preVal) => {
      return {
        ...preVal,
        [ name ]: value,
      };
    });  
  };
  
  const submitAction = e => {
    e.preventDefault();
    alert(`Hi ${state.fullname} you'r contact no is ${state.mobile}, email is ${state.email} and Message: ${state.message}`);
  };

  return (
    <>
      <div className="container">
        <div className="card w-50 mx-auto my-2 p-5">
        <h3>Contact Form Using ReactJS</h3>
          <form onSubmit={submitAction}>
            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="fullname"
                onChange={inputEvent} 
                value={state.fullname}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="mobile" className="form-label">Contact No.</label>
              <input
                type="number"
                name="mobile"
                onChange={inputEvent}
                value={state.mobile}
                className="form-control"
                placeholder="Enter Mobile"
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                onChange={inputEvent}
                value={state.email}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                onChange={inputEvent}
                value={state.message}
                name="message"
                placeholde="Write your thought"
              ></textarea>
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;