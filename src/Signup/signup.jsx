import React from "react";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
const Signup = () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [c_pwd, setC_pwd] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div className="container-fluid row">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://technologypressblog.files.wordpress.com/2016/08/400197-myntra-logo.jpg"
          alt="myntra-logo"
          className="signup-logo"
        />
        <div className="wrapper bg-black p-5 rounded-5 col-xl-5 col-lg-8 col-md-9 col-sm-12">
          <h3 className="text-white text-center">NEW USER REGISTERATION</h3>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                value={name}
                onChange={() => setName()}
                required
              />
              <div className="invalid-feedback">Enter a valid name</div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">
                E-mail:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                value={email}
                onChange={() => setEmail()}
                required
              />
              <div className="invalid-feedback">Please enter valid input</div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone" className="form-label text-white">
                Phone:
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter phone number"
                id="phone"
                value={phone}
                onChange={setPhone}
                required
              />
              <div className="invalid-feedback">Please enter valid input</div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                value={pwd}
                onChange={setPwd}
                required
              />
              <div className="invalid-feedback">Please enter valid input</div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-white">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                value={c_pwd}
                onChange={setC_pwd}
                required
              />
              <div className="invalid-feedback">Please enter valid input</div>
            </div>
            <button
              type="submit"
              className="d-block w-100 btn btn-primary rounded mt-4"
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
