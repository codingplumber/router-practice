import * as actionTypes from './actions';

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'John Doe',
            email: 'email1@email.com',
            phone: '1234567890'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'email2@email.com',
            phone: '1234567891'
        },
        {
            id: 3,
            name: 'Jack Doe',
            email: 'email3@email.com',
            phone: '1234567892'
        },
        {
            id: 4,
            name: 'Jill Doe',
            email: 'email4@email.com',
            phone: '1234567893'
        },
        {
            id: 5,
            name: 'Dill Doe',
            email: 'email5@email.com',
            phone: '1234567894'
        },
        {
            id: 6,
            name: 'Bill Doe',
            email: 'email6@email.com',
            phone: '1234567895'
        },
        {
            id: 7,
            name: 'Phil Doe',
            email: 'email7@email.com',
            phone: '1234567896'
        }              
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case actionTypes.GET_CONTACTS:
        // return {
        //     ...state,
        //     contacts: state.contacts
        // }
        default:
            return state;
    }
}

export default reducer;