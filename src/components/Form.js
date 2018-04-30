import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';
import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

class Form extends Component {
    componentDidMount() {
        this.props.onContactChange(this.props.match.params.contactId);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.contactId !== newProps.match.params.contactId) {
            this.props.onContactChange(newProps.match.params.contactId)
        } 
    }

    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }

    render() {
        const { contact, onUpdate, onDelete, onAdd, onLoadedContactChange } = this.props;
        const { contactId } = this.props.match.params;

        return (
            <form onSubmit={ this.submit }>
                <div style={{fontSize: 32}}>{ contactId }</div>
                <Inputs
                    labels={[ 'Name:', 'Email:', 'Phone:' ]}
                    names={[ 'name', 'email', 'phone' ]}
                    values={[ contact.name, contact.email, contact.phone ]}
                    focus={ this.focus }
                    change={ (e) => onLoadedContactChange(e.target.name, e.target.value) } />

                <Buttons
                    values={[ 'Update', 'Delete', 'Add New Contact' ]}
                    click={[
                        () => onUpdate(contactId),
                        () => onDelete(contactId),
                        onAdd
                    ]} />   
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        contact: state.loadedContact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onContactChange: (contactId) => dispatch({ type: actionTypes.GET_CONTACT, contactId }),
        onLoadedContactChange: (name, value) => dispatch({ type: actionTypes.CHANGE_LOADED_CONTACT, payload: {name, value} }),
        onUpdate: (contactId) => dispatch({ type: actionTypes.UPDATE_CONTACT, contactId }),
        onDelete: (contactId) => dispatch({ type: actionTypes.DELETE_CONTACT, contactId }),
        onAdd: () => dispatch({ type: actionTypes.ADD_CONTACT }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);