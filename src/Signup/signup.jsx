import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
const Signup = () => {
  return (
    <div className="container-fluid ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://technologypressblog.files.wordpress.com/2016/08/400197-myntra-logo.jpg"
          alt="myntra-logo"
          className="signup-logo"
        />
        <div className="wrapper bg-black p-5 rounded-5 w-75">
          <h3 className="text-white text-center">NEW USER REGISTERATION</h3>
          <form action="login" className="needs-validation" noValidate>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                E-mail:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                Phone:
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter full name"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>
            <button
              type="submit"
              className="d-block w-100 btn btn-primary rounded mt-4"
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
