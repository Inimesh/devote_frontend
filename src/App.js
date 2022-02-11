import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  class Dashboard extends React.Component {
    render() {
      return(<div>Welcome, Username!</div>)
    }
  }

  class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

  class User extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (
      <div>
        <h1>Welcome, User!</h1>
        <UserJSON details={["john doe", "johndoe@email.com"]}/>
        <TransactionList/>
      </div>
      );
    }
  }

  class TransactionList extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (
      <div>
        <h1>Your Transactions</h1>
        <TransactionsListJSON transactions={["Starbucks: 3.98", "HMV: 44.99", "TFL: 5.60"]}/>
      </div>
      );
    }
  }

  class ReceiverAccount extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (
      <div>
        <h1>Your Pots</h1>
        <ReceiverAccountJSON receiver={["Savings Pot", "British Heart Foundation", "Cancer Research"]}/>
      </div>
      );
    }
  }

  const ReceiverAccountJSON = props => {
    return <p>{props.receiver.join(", ")}</p>
  };

  const TransactionsListJSON = props => {
    return <p>{props.transactions.join(", ")}</p>
  };
  
  const UserJSON = props => {
    return <p> {props.details.join(", ")}</p>
};


ReactDOM.render(
  <User> <TransactionList/> </User>, 
  document.getElementById('main-container')
);

ReactDOM.render(
  <ReceiverAccount/>,
  document.getElementById('second-container')
);
}


export default App;
