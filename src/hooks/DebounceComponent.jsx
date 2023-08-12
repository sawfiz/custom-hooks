import React, { useState } from 'react';
import useDebounce from './useDebounce';

export default function DebounceComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div className="section">
      <h2>useDebounce</h2>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
