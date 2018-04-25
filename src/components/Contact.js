import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

// import IndividualContact from './IndividualContact';

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
                <Link to={`${contact.id}`} key={ contact.id } onClick={this.props.onParamsUpdate}>
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

const mapDispatchToProps = dispatch => {
    return {
        // onContactLoad: () => dispatch({ type: actionTypes.GET_CONTACTS })
        // PLAYING WITH THIS....see onClick on link tag
        onParamsUpdate: () => dispatch({ type: actionTypes.UPDATE_PARAMS })
    }
}

// export default contact;
export default connect(mapStateToProps, mapDispatchToProps)(Contact);

// <Link to={`/${contact.id}`}></Link> 