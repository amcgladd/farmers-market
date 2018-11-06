import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  var appStyles= {
    backgroundColor: 'green'
  }
  return (
    <div style={appStyles}>
      <Header/>
      <TicketList />
    </div>
  );
}

export default App;
