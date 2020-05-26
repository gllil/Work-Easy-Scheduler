import React from "react";
import { Button } from "react-bootstrap"

function AdminLogin(){
    return(
        <div>
            <div className="container">
                <div className="row"><input placeholder="email" type="email"></input></div>
                <div className="row"><input placeholder="password" type="password"></input></div>
                <div className="row"><Button>Submit</Button></div>
            </div>
        </div>
    )
}

export default AdminLogin;