import "./App.css";
import axios from "axios";
import Configs from "./components/configs.js";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const API_URL = "http://localhost:3000/api/configs";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
