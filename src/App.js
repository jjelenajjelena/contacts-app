import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";

import Header from "./components/Header/Header";

export default class App extends Component {
 
  state = {
    accounts: []
};

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact>
                        <AccountsTable accounts={this.state.accounts} />
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}
