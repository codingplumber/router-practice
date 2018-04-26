import React, { Component } from 'react';

import Contacts from './components/Contacts';


const styles = {
  appContainer: {
    height: '100vh'
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <Contacts />
      </div>  
    );
  }
}

export default App;  
