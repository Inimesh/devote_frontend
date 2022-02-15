import React from "react";

const SignUp = ({handleSubmit, username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, setPercentage}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Full name: </label>
      <input
        type="text"
        value={username}
        placeholder="enter full name"
        onChange={({ target }) => setUsername(target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        value={email}
        placeholder="enter email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Confirm password: </label>
        <input
          type="password"
          value={passwordConfirmation}
          placeholder="confirm password"
          onChange={({ target }) => setPasswordConfirmation(target.value)}
        />
      </div>
      <div>
        <label htmlFor="ccn">Credit Card Number:</label>
        <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
      </div>
      <div>
        <label htmlFor="percentage">We will round up each transaction to the nearest pound, but if you prefer choose a percentage instead:</label>

        <select name="percentage" onChange={({ target }) => setPercentage(target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="0.03">3%</option>
            <option value="0.05">5%</option>
            <option value="0.1">10%r</option>
        </select>
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default SignUp;