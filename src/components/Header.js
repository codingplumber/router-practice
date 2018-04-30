import React from 'react';

const styles = {
    headerWrapper: {
        height: 85,
        fontSize: 60,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const header = () => <div style={styles.headerWrapper}>Contacts</div>;

export default header;