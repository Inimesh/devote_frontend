import React from "react";
import "./Login.css";
import Logo from "./devotelogo.png";

const Login = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <div className="loginContainer">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-5 align-content-center">
          <img
            className="rounded mx-auto d-block w-75 p-3"
            src={Logo}
            alt="Devote logo"
          />
          <h4 className="text-center">
            Saving a <em>small</em> amount soon builds up to a large amount.
          </h4>
        </div>
        <div className="col-md-5">
          <form onSubmit={handleSubmit}>
            <h3>Please login</h3>
            <div className="mb-3">
              {/* <label htmlFor="username">Username: </label> */}
              <input
                className="form-control"
                type="text"
                value={username}
                placeholder="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="password">password: </label> */}
              <input
                className="form-control"
                type="password"
                value={password}
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button
              className="w-100 login-btn btn btn-lg btn-primary"
              type="submit"
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
