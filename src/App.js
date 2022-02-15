import './App.css';
import axios from 'axios';
import Configs from "./components/configs.js";
import {useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";

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
const TRANSACTIONS_API_URL = `http://localhost:3000/api/transactions?user_id=${user.id}`;
const USER_INFO_API_URL = `http://localhost:3000/api/users/${user.id}`;
const ALL_RECEIVER_ACCOUNTS_API_URL = `http://localhost:3000/api/receiver_accounts`;

function getTransactionsAPIData() {
  return axios.get(TRANSACTIONS_API_URL).then((response => response.data))
}

function getUserInfoAPIData() {
  return axios.get(USER_INFO_API_URL).then((response => response.data))
}

function getAllReceiverAccountAPIData() {
  return axios.get(ALL_RECEIVER_ACCOUNTS_API_URL).then((response => response.data))
}

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTransactionsAPIData().then((transactions) => {
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

  const [receiverAccountInfo, setReceiverAccountInfo] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAllReceiverAccountAPIData().then((allReceiverAccountInfo) => {
      if (mounted) {
        const userReceiverAccountInfo = allReceiverAccountInfo.filter(account => {
          return account.user_id == user.id
        });
        console.log(userReceiverAccountInfo)
        setReceiverAccountInfo(userReceiverAccountInfo);
      }
    });
    return () => (mounted = false);
  }, []);

  // Rendering to screen ---------------------------------------------------
  return (
    <div className="App">
      <p>Receiver account info:</p>
      <Dashboard transactions={transactions} userInfo={userInfo} receiverAccountInfo={receiverAccountInfo}/>
    </div>
  );
}

export default App;
