import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            online : props.online
        };
    }
    render() {
        return(
            <section className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status" onClick = {event => {
                            const offline = !this.state.online;
                            this.setState({online : offline});
                        }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </section>
        );
    }   
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
};

export default Contact;