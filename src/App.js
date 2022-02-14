import './App.css';
import axios from 'axios';
import Configs from "./components/configs.js";
import {useEffect, useState } from "react";

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

//to fetch user transactions
const user = {
  id: 1
}
const API_URL = `http://localhost:3000/api/transactions?user_id=${user.id}`;

function getAPIData() {
  return axios.get(API_URL).then((response => response.data))
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

  return (
    <div className="App">
      <h1>Hello</h1>
      <Dashboard transactions={transactions} />
    </div>
  );
}

export default App;
