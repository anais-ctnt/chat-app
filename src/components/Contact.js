import React from 'react';
import './Contact.css';

const name = "Claudia Chambers";
const avatar = "https://randomuser.me/api/portraits/women/67.jpg";
const status = false

const Contact = () => {
    return(
        <section className="Contact">
            <img className="avatar" src={avatar} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={status ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;