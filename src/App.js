import './App.css';
import axios from 'axios';
import {useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login"
import SignUp from './components/SignUp';

function getTransactionsAPIData(userId) {
  return axios.get(`http://localhost:3000/api/transactions?user_id=${userId}`).then((response => response.data))
}

function getAllReceiverAccountAPIData() {
  return axios.get(`http://localhost:3000/api/receiver_accounts`).then((response => response.data))
}

function App() {

  const [transactions, setTransactions] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState();

  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [percentage, setPercentage] = useState("");

  const [receiverAccountInfo, setReceiverAccountInfo] = useState([]);

  const [show, setShow] = useState(false)

  const showSignup = () => {
    setShow(true)
  };

  const hideSignup = () => {
    setShow(false)
  };

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

    getAllReceiverAccountAPIData().then((allReceiverAccountInfo) => {
      const userReceiverAccountInfo = allReceiverAccountInfo.filter(account => {
          return account.user_id === response.data.user.id
        });
        setReceiverAccountInfo(userReceiverAccountInfo);
        console.log(receiverAccountInfo)
    });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    const user = {
      user: { 
        username: signupUsername,
        email: email, 
        password: signupPassword, 
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

    getAllReceiverAccountAPIData().then((allReceiverAccountInfo) => {
      const userReceiverAccountInfo = allReceiverAccountInfo.filter(account => {
          return account.user_id === response.data.user.id
        });
        setReceiverAccountInfo(userReceiverAccountInfo);
    });
  };

  const handleLogout = () => {
    setUserInfo();
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserInfo(foundUser);
      getTransactionsAPIData(foundUser.user.id).then((transactions) => {
          setTransactions(transactions);
      });

      getAllReceiverAccountAPIData().then((allReceiverAccountInfo) => {
        const userReceiverAccountInfo = allReceiverAccountInfo.filter(account => {
            return account.user_id === foundUser.user.id
          });
          setReceiverAccountInfo(userReceiverAccountInfo);
      });
    }
  }, []);

  // Rendering to screen ---------------------------------------------------

  if (userInfo) {
    return (
      <div className="App">
        <Dashboard handleLogout={handleLogout} transactions={transactions} userInfo={userInfo.user} receiverAccountInfo={receiverAccountInfo}/>
      </div>
    );
  }

    return (
      <div>
        <Login showSignup={showSignup} handleSubmit={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
        <SignUp show={show} handleClose={hideSignup} handleSubmit={handleSignUp} username={signupUsername} setUsername={setSignupUsername} email={email} setEmail={setEmail} password={signupPassword} setPassword={setSignupPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} setPercentage={setPercentage} />
      </div>
    )

}

export default App;
