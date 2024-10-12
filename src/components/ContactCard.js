import React from "react";
import user from "../images/user.png"
const ConatctCard=(props)=>{
    const {id,name,number,email}=props.contact
    return(
        <div className="item">
            <img src={user} alt="user" className="ui avatar image" />
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
                <i className="trash alternate outline icon" style={{color: "red", marginTop: "7px",alignItems:"baseline"}}></i>
            </div>

        </div>
    );
};

export default ConatctCard