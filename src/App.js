
import React from 'react';
import './App.css';
import Address from './Component/Profile/Address';
import Flash from './Component/Profile/Flash';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flash/>
        <ProfilPhoto/>
        <FullName/>
        <Address/>
        
           
        
        
      </header>
      
      
    </div>
  );
}

export default App;
