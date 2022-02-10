import "./App.css";
import axios from "axios";
import Configs from "./components/configs.js";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

const API_URL = "http://localhost:3000/api/configs";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }
  componentDidMount() {
    this.loginStatus();
  }
  loginStatus = () => {
    axios
      .get("http://localhost:3000/api/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Home/>
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
