import React from 'react';
import { Link } from 'react-router-dom';

// import IndividualContact from './IndividualContact';

const styles = {
    contactContainer: {
        border: '1px solid black',
        padding: 5,
        overflow: 'hidden'
    }
}

const contact = props => {
    const contact = props.contacts.map(contact => {
        return ( 
            <Link to={`${contact.id}`} key={ contact.id } contacts={props.contacts} >          
                <div style={styles.contactContainer}>              
                    <p>{ contact.name }</p>
                    <p>{ contact.email }</p>
                    <p>{ contact.phone }</p>   
                </div>
            </Link>
        )
    })
    return <div>{contact}</div>
};

export default contact;

// <Link to={`/${contact.id}`}></Link> 