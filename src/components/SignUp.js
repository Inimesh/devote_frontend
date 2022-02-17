import React from "react";
import "./SignUp.css";

const SignUp = ({handleClose, show, handleSubmit, username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, setPercentage}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <div id="form-signup">
        <button type="button" className="btn-close float-end" onClick={handleClose} aria-label="Close"></button>
        <h2 className="text-center">Sign Up</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">Full name</label>
          <input
            className="form-control" 
            id="username" 
            type="text"
            value={username}
            placeholder="enter full name"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            type="email"
            value={email}
            placeholder="enter email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">password</label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="passwordConfirmation">Confirm password</label>
          <input
            className="form-control"
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            placeholder="confirm password"
            onChange={({ target }) => setPasswordConfirmation(target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="ccn">Credit Card Number</label>
          <input className="form-control" id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="percentage">We will round up each transaction to the nearest pound, but if you prefer choose a percentage instead:</label>
          <select className="form-select" name="percentage" onChange={({ target }) => setPercentage(target.value)} aria-label="round_up option">
              <option value="">--Blank--</option>
              <option value="3">3%</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Create Account</button>
      </form>
      </div>
    </div>
  );
}

export default SignUp;
