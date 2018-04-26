import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Contact from '../containers/Contact';
import Form from '../containers/Form';

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

const contacts = () => {
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

export default contacts;
