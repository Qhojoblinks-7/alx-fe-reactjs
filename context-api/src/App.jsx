import React from 'react';
import { NameProvider } from './components/Namecontext';
import NameDisplay from './components/NameDisplay';
import NameInput from './components/NameInput';

function App(){
  return(
    <NameProvider>
      <div style={{textAlign:  'center', margin: '50px'}}>
        <NameDisplay />
        <NameInput />
      </div>
    </NameProvider>
  );
}

export default App;