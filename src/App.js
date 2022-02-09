import './App.css';
import axios from 'axios';
import Configs from "./components/configs.js";
import {useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/configs";

function getAPIData() {
  return axios.get(API_URL).then((response => response.data))
}

function App() {

  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setConfigs(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Configs configs={configs} />
    </div>
  );
}

export default App;
