import React from 'react';
import './App.css';

import ToggleComponent from './hooks/ToggleComponent';
import TimeoutComponent from './hooks/TimeoutComponent';
import DebounceComponent from './hooks/DebounceComponent';

function App() {
  return (
    <>
      <ToggleComponent />
      <TimeoutComponent />
      <DebounceComponent />
    </>
  );
}

export default App;
