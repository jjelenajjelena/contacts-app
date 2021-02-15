import React from "react";

export default function Account({ account, edit, deleteAccount }) {
  
    const actionButtons = edit ? (
        <>
            <td>
                <button onClick={()=>{deleteAccount(account.id)}} className="btn btn-danger"><span></span> Delete</button>
            </td>
        </>
    ) : null;

    return (
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {actionButtons}
        </tr>
    );
}
