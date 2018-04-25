import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import * as actionTypes from '../store/actions';
import Contact from '../components/Contact';
import Form from './Form';

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
    // componentDidMount() {
    //     this.props.onContactLoad();
    // }

    render() {
        return (
            <BrowserRouter>
                <div style={styles.contactsWrapper}>
                    <div style={styles.contactsContainer}>
                        <Contact />
                    </div>

                    <div style={styles.routeContainer}>
                        <Switch>
                            <Route exact path='/:contactId' component={Form} />
                            <Redirect from='/' to='/1' />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );

    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactLoad: () => dispatch({ type: actionTypes.GET_CONTACTS })
    }
}

// export default Contacts;
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


// <Route path='/:id' render={(props) => (
//     <IndividualContact contacts={this.props.people} />
// )} />

// <Route path='/:contactId' component={IndividualContact} />

// <Route path={'/:id'} component={Contact} /> 