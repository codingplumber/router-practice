import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Contacts from './containers/Contacts';
// import Hello from './components/Hello';

const styles = {
  appContainer: {
    // display: 'flex',
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

// <div style={styles.appContainer}>
//   <Contacts />
// </div>

// <div>
// <ul>
//   <li><Link to='/'>Hello</Link></li>
//   <li><Link to='/contacts'>Contacts</Link></li>
// </ul>

// <Route path='/' component={Hello} />
// <Route path='/contacts' component={Contacts} />
// </div>  
