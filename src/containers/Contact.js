import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
    contactContainer: {
        border: '1px solid black',
        padding: 5,
        overflow: 'hidden'
    }
}

class Contact extends Component {
    render() {
        const contact = this.props.contacts.map(contact => {
            return ( 
                <Link to={`${contact.id}`} key={ contact.id }>
                    <div style={styles.contactContainer}>              
                        <p>{ contact.name }</p>
                        <p>{ contact.email }</p>
                        <p>{ contact.phone }</p>   
                    </div>
                </Link>
            )
        })
        return <div>{contact}</div>
    }
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, null)(Contact);