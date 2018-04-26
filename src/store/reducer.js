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
        case actionTypes.GET_CONTACT:
            const updatedContact = state.contacts.filter(contact => contact.id === parseInt(action.contactId, 10));
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
            const updatedContactsAdd = state.contacts.map(contact => {
                if (contact.id === parseInt(action.contactId, 10)) {
                    contact.name = state.loadedContact.name;
                    contact.email = state.loadedContact.email;
                    contact.phone = state.loadedContact.phone;
                }
                return contact;
            });
            return {
                ...state,
                contacts: updatedContactsAdd
            }

        case actionTypes.DELETE_CONTACT:
            const updatedContactsDelete = state.contacts.filter(contact => contact.id !== parseInt(action.contactId, 10));
            return {
                ...state,
                contacts: updatedContactsDelete,
                loadedContact: {
                    ...state.loadedContact,
                    id: updatedContactsDelete.length > 0 ? updatedContactsDelete[0].id : '',
                    name: updatedContactsDelete.length > 0 ? updatedContactsDelete[0].name : '',
                    email: updatedContactsDelete.length > 0 ? updatedContactsDelete[0].email : '',
                    phone: updatedContactsDelete.length > 0 ? updatedContactsDelete[0].phone : '',
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
