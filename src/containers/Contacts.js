import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import * as actionTypes from '../store/actions';
import Contact from '../components/Contact';
import IndividualContact from '../components/IndividualContact';

const styles = {
    contactsWrapper: {
        display: 'flex',
        height: '100vh'
    },
    contactsContainer: {
        border: '1px solid black',
        padding: 25,
        height: '100%',
        width: '33%',
        overflow: 'scroll'
    },
    routeContainer: {
        border: '1px solid black',
        padding: 25,
        height: '100%',
        width: '66%'
    }
}

class Contacts extends Component {
    componentWillMount() {
        this.props.onContactLoad();
    }

    render() {
        return (
            <div style={styles.contactsWrapper}>
                <div style={styles.contactsContainer}>
                    <Contact contacts={this.props.people} />
                </div>

                <div style={styles.routeContainer}>
                    <Switch>
                        <Route exact path='/:contactId' component={IndividualContact} />
                    </Switch>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        people: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactLoad: () => dispatch({ type: actionTypes.GET_CONTACTS })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


// <Route path='/:id' render={(props) => (
//     <IndividualContact contacts={this.props.people} />
// )} />

// <Route path='/:contactId' component={IndividualContact} />

// <Route path={'/:id'} component={Contact} /> 