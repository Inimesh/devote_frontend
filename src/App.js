import './App.css';
import axios from 'axios';
import Configs from "./components/configs.js";
import {useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard.js";

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
const user = {
  id: 1
}
const API_URL = `http://localhost:3000/api/transactions?user_id=${user.id}`;
const USER_INFO_API_URL = `http://localhost:3000/api/users/${user.id}`;

function getAPIData() {
  return axios.get(API_URL).then((response => response.data))
}

function getUserInfoAPIData() {
  return axios.get(USER_INFO_API_URL).then((response => response.data))
}

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((transactions) => {
      if (mounted) {
        setTransactions(transactions);
      }
    });
    return () => (mounted = false);
  }, []);


  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUserInfoAPIData().then((userInfo) => {
      if (mounted) {
        setUserInfo(userInfo);
      }
    });
    return () => (mounted = false);
  }, []);


  // Rendering to screen ---------------------------------------------------
  return (
    <div className="App">
      <h1>Hello</h1>
      <Dashboard transactions={transactions} userInfo={userInfo}/>
    </div>
  );
}

export default App;
