import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";

import Header from "./components/Header/Header";

export default class App extends Component {
 
  state = {
    accounts: []
};

componentDidMount() {
  let data = [];
  if(localStorage.getItem('contacts')){
      data = JSON.parse(localStorage.contacts);
  }
  this.setState({
      accounts : data
  })
}

addNewAccountToState = (acc) => {
  localStorage.contacts = JSON.stringify([...this.state.accounts,acc]);
  this.setState({
      accounts: [...this.state.accounts, acc],
  });
};

deleteAccount = (id) => {
  const accountsCopy = [...this.state.accounts];
  const newCopyAccounts = accountsCopy.filter(
      (account) => account.id !== id
  );
  localStorage.contacts = JSON.stringify(newCopyAccounts);
  this.setState({ accounts: newCopyAccounts });
};

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact>
                        <AccountsTable accounts={this.state.accounts} />
                    </Route>
                    <Route path="/add">
                        <AddAccount
                            addNewAccountToState={this.addNewAccountToState}
                        />
                    </Route>
                    <Route path="/edit">
                        <EditTable
                            accounts={this.state.accounts}
                            deleteAccount={this.deleteAccount}
                        />
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}
