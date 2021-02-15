import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";


import Header from "./components/Header/Header";

export default class App extends Component {
 





    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </div>
        );
    }
}
