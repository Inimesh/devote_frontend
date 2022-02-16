import './App.css';
import axios from 'axios';
import Configs from "./components/configs.js";
import {useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login"
import SignUp from './components/SignUp';

// const API_URL = "http://localhost:3000/api/configs";

// function getAPIData() {
//   return axios.get(API_URL).then((response => response.data))
// }

// function App() {

//   const [configs, setConfigs] = useState([]);

//   useEffect(() => {
//     let mounted = true;
//     getAPIData().then((items) => {
//       if (mounted) {
//         setConfigs(items);
//       }
//     });
//     return () => (mounted = false);
//   }, []);

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Configs configs={configs} />
//     </div>
//   );
// }

// API calling ----------------------------------------------------------
// const user = {
//   id: 1
// }
// const TRANSACTIONS_API_URL = `http://localhost:3000/api/transactions?user_id=${user.id}`;
// const USER_INFO_API_URL = `http://localhost:3000/api/users/${user.id}`;

function getTransactionsAPIData(userId) {
  return axios.get(`http://localhost:3000/api/transactions?user_id=${userId}`).then((response => response.data))
}

// function getUserInfoAPIData() {
//   return axios.get(USER_INFO_API_URL).then((response => response.data))
// }

function App() {

  const [transactions, setTransactions] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState();

  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    const user = {
      user: { username: username, password: password }
    };
    // send the username and password to the server
    const response = await axios.post(
      'http://localhost:3000/api/login',
      user
    );
    // set the state of the user
    setUserInfo(response.data)
    // store the user in localStorage
    localStorage.setItem('user', JSON.stringify(response.data))
    getTransactionsAPIData(response.data.user.id).then((transactions) => {
      setTransactions(transactions);
    });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    const user = {
      user: { 
        username: username,
        email: email, 
        password: password, 
        password_confirmation: passwordConfirmation,
      }
    };
    const response = await axios.post(
      'http://localhost:3000/api/users',
      user
    );
    const setSavingsPot = await axios.post(
      'http://localhost:3000/api/receiver_accounts',
      {
        receiver_account: {
          account_name: "Savings",
          user_id: response.data.user.id
        }
      }
    )
    // to add configurations
    let userConfig;
    if (percentage) {
      userConfig = {
        config: {
          round_up_to: percentage,
          percentage: true,
          user_id: response.data.user.id
        }
      }
    } else {
      userConfig = {
        config: {
          round_up_to: 1,
          percentage: false,
          user_id: response.data.user.id
        }
      }
    }
    
    const setUserConfig = await axios.post(
      'http://localhost:3000/api/configs',
      userConfig
    );

    setUserInfo(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
    getTransactionsAPIData(response.data.user.id).then((transactions) => {
      setTransactions(transactions);
    });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserInfo(foundUser);
      getTransactionsAPIData(foundUser.user.id).then((transactions) => {
          setTransactions(transactions);
      });
    }
  }, []);

  // useEffect(() => {
  //   let mounted = true;
  //   getTransactionsAPIData(userInfo.user.id).then((transactions) => {
  //     if (mounted) {
  //       console.log(transactions)
  //       setTransactions(transactions);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);


  // useEffect(() => {
  //   let mounted = true;
  //   getUserInfoAPIData().then((userInfo) => {
  //     if (mounted) {
  //       setUserInfo(userInfo);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);


  // Rendering to screen ---------------------------------------------------
  if (userInfo) {
    return (
      <div className="App">
        <Dashboard transactions={transactions} userInfo={userInfo.user}/>
      </div>
    );
  }

    return (
      <div>
        <Login handleSubmit={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
        <SignUp handleSubmit={handleSignUp} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} setPercentage={setPercentage} />
      </div>
    )
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="username">Username: </label>
  //     <input
  //       type="text"
  //       value={username}
  //       placeholder="enter a username"
  //       onChange={({ target }) => setUsername(target.value)}
  //     />
  //     <div>
  //       <label htmlFor="password">password: </label>
  //       <input
  //         type="password"
  //         value={password}
  //         placeholder="enter a password"
  //         onChange={({ target }) => setPassword(target.value)}
  //       />
  //     </div>
  //     <button type="submit">Login</button>
  //   </form>
  // );

}

export default App;
