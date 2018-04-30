import React from 'react';

import Header from './components/Header';
import Contacts from './components/Contacts';


const styles = {
  appContainer: {
    height: '100vh'
  }
}

const app = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <Contacts />
    </div>  
  );
}

export default app;  
