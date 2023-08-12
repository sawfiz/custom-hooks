import React, { useState } from 'react';
import usePrevious from './usePrevious';

export default function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Kyle');
  const previousCount = usePrevious(count);

  return (
    <div className="section">
      <h2>usePrevious</h2>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  );
}
