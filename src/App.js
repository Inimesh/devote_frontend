import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';
import useToken from './components/useToken';

// function setToken(userToken){
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/preferences" element={<Preferences/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;






// import React from 'react';
// import './App.css';
// import ReactDOM from 'react-dom';
// import Dashboard from './Dashboard';
// import Preferences from './Preferences';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


// function App() {
 
//   return (
//   <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/Dashboard" element={<Dashboard/>} />
//             <Dashboard />
//           {/* </Route> */}
//           <Route path="/Preferences" element={<Preferences/>} />
//             <Preferences />
//           {/* </Route> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );

// }

//   class SearchBar extends React.Component {
//     render() {
//       return (
//         <form>
//           <input type="text" placeholder="Search..." />
//           <button> Logout </button>
//         </form>
//       );
//     }
//   }

//   class User extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     // }
//     render() {
//       return (
//       <div>
//         <h1>Welcome, User!</h1>
//         <UserJSON details={["john doe", "johndoe@email.com"]}/>
//         <TransactionList/>
//       </div>
//       );
//     }
//   }

//   class TransactionList extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     // }
//     render() {
//       return (
//       <div>
//         <h2>Your Recent Transactions</h2>
//         <TransactionsListJSON transactions={["Starbucks: 3.98", "HMV: 44.99", "TFL: 5.60"]}/>
//       </div>
//       );
//     }
//   }

//   class ReceiverAccount extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     // }
//     render() {
//       return (
//       <div>
//         <h2>Your Pots</h2>
//         <ReceiverAccountJSON receiver={["Savings Pot", "British Heart Foundation", "Cancer Research"]}/>
//       </div>
//       );
//     }
//   }

//   const ReceiverAccountJSON = props => {
//     return <p>{props.receiver.join(", ")}</p>
//   };

//   const TransactionsListJSON = props => {
//     return <p>{props.transactions.join(", ")}</p>
//   };
  
//   const UserJSON = props => {
//     return <p> {props.details.join(", ")}</p>
// };

// ReactDOM.render(
//   <SearchBar/>,
//   document.getElementById('search-bar')
// );

// ReactDOM.render(
//   <User> <TransactionList/> </User>, 
//   document.getElementById('main-container')
// );

// ReactDOM.render(
//   <ReceiverAccount/>,
//   document.getElementById('second-container')
// );

// ReactDOM.render(
//   <App/>,
//   document.getElementById('main-container')
// );

// export default App;
