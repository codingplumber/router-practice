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
    ],
    loadedContact: {
        id: '',
        name: '',
        email: '',
        phone: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PARAMS:
            console.log('params')
            return {
                ...state
            }

        case actionTypes.GET_CONTACT:
            const updatedContact = state.contacts.filter(contact => contact.id === parseInt(action.contactId));
            return {
                ...state,
                loadedContact: {
                    ...state.loadedContact,
                    id: updatedContact[0].id,
                    name: updatedContact[0].name,
                    email: updatedContact[0].email,
                    phone: updatedContact[0].phone
                }
            }

        case actionTypes.UPDATE_CONTACT:
            console.log('UPDATE')
            return {
                ...state
            }

        case actionTypes.DELETE_CONTACT:
            console.log('DELETE', action.contactId)
            const updatedContacts = state.contacts.filter(contact => contact.id !== parseInt(action.contactId))
            console.log('updatedContacts', updatedContacts)
            return {
                ...state,
                contacts: updatedContacts,
                loadedContact: {
                    ...state.loadedContact,
                    id: updatedContacts.length > 0 ? updatedContacts[0].id : '',
                    name: updatedContacts.length > 0 ? updatedContacts[0].name : '',
                    email: updatedContacts.length > 0 ? updatedContacts[0].email : '',
                    phone: updatedContacts.length > 0 ? updatedContacts[0].phone : '',
                }
            }

        case actionTypes.ADD_CONTACT:
            const id = state.contacts[state.contacts.length - 1].id + 1,
                updatedLoadedContact = {...state.loadedContact, id };
            return {
                ...state,
                contacts: state.contacts.concat(updatedLoadedContact)
            }

        case actionTypes.CHANGE_LOADED_CONTACT:
            return {
                ...state,
                loadedContact: {
                    ...state.loadedContact,
                    [action.payload.name]: action.payload.value
                }
            }

        default:
            return state;
    }
}

export default reducer;


// ISSUES 
// ----breaks when refreshing if it is an added contact that is is on when it refreshes because contact not in memory anymore 

//-----when deleting contact it doesn't change params so I have to click on each person to delete them

// TO FINISH
// ----Updating