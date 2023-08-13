import React from 'react';
import './App.css';

import ToggleComponent from './hooks/ToggleComponent';
import TimeoutComponent from './hooks/TimeoutComponent';
import DebounceComponent from './hooks/DebounceComponent';
import UpdateEffectComponent from './hooks/UpdateEffectComponent';
import PreviousComponent from './hooks/PreviousComponent';
import StateWithHistoryComponent from './hooks/StateWithHistoryComponent';


function App() {
  return (
    <>
      {/* <ToggleComponent /> */}
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      {/* <UpdateEffectComponent /> */}
      {/* <PreviousComponent /> */}
      <StateWithHistoryComponent />
    </>
  );
}

export default App;
