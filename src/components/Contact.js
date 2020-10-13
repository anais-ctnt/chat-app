import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = (props) => {
    return(
        <section className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.isOnline ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{props.isOnline ? "Online" : "Offline"}</p>
                </div>
            </div>
        </section>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
};

export default Contact;