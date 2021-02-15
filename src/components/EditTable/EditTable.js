import React from "react";
import Account from "../Account/Account";

export default function EditTable({accounts,deleteAccount}) {

    const allAccounts = accounts.map(account=>{
        return (
            <Account account={account}  edit={true} deleteAccount={deleteAccount} key={account.id}/>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h1 className="display-4 m-4">Delete Contact</h1>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>LastName</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>{allAccounts}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
