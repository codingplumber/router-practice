import React from 'react';

const individualContact = ({ match }) => {
    // props
    console.log(match);
    // let num = parseInt(match.params.contactId)
    return (
        <div style={{fontSize: 32}}>{match.params.contactId}</div>
    );
}

export default individualContact; 