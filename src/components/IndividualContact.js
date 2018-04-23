import React from 'react';

const individualContact = (props) => {
    // props
    console.log(props.contacts);
    // let num = parseInt(match.params.contactId)
    return (
        <div>
            <div style={{fontSize: 32}}>{props.match.params.contactId}</div>
            <p></p>
        </div>
    );
}

export default individualContact; 