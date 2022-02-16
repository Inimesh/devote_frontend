import React from 'react';
import "./Login.css"

const Login = ({handleSubmit, username, setUsername, password, setPassword}) => {
  return (
    <div className="form-signin">
      <form onSubmit={handleSubmit}>
        <img className="mb-4 text-center" />
        <h1 className="h3 mb-3 fw-normal text-center">Please login</h1>
        <div className="form-floating text-center">
          <label htmlFor="username">Username: </label>
          <input
            className="form-control"
            type="text"
            value={username}
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="form-floating text-center">
          <label htmlFor="password">password: </label>
          <input
            className="form-control"
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button
          className="w-100 Login-btn btn btn-lg btn-primary"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
