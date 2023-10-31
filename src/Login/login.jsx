import React from "react";

const Login = () => {
  return (
    <div className="container-fluid ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://technologypressblog.files.wordpress.com/2016/08/400197-myntra-logo.jpg"
          alt="myntra-logo"
          className="signup-logo"
        />
        <div className="wrapper bg-black p-5 rounded-5 w-75">
          <h3 className="text-white text-center">USER LOGIN</h3>
          <form action="/login" className="needs-validation" noValidate>
            <div className="form-group mb-3 was-validated">
              <label htmlFor="name" className="form-label text-white">
                E-mail:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
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
                placeholder="Enter Password"
                id="name"
                required
              />
              {/* <div className="invalid-feedback">Please enter valid input</div> */}
            </div>

            <button
              type="submit"
              className="d-block w-100 btn btn-primary rounded mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
