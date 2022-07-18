import React from "react";
import user from "../images/OIP.jpg";

const ContactCard = (props) => {
    const {id, name, email } = props.contact;
    return (
    <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <div className="header">{name}-{id}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}
            onClick={()=> props.clickHandler(id)}
            ></i>
        </div>
    </div>
    );
};
export default ContactCard;