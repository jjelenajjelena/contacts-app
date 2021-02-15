import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";

import Header from "./components/Header/Header";

export default class App extends Component {
 
  state = {
    accounts: []
};

addNewAccountToState = (acc) => {
  localStorage.contacts = JSON.stringify([...this.state.accounts,acc]);
  this.setState({
      accounts: [...this.state.accounts, acc],
  });
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
                </BrowserRouter>
            </div>
        );
    }
}
