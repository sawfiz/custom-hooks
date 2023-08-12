import React, { useState } from 'react';
import useTimeout from './useTimeout';

export default function TimeoutComponent() {
  // start count at 10
  const [count, setCount] = useState(10);
  // by default, count set to 0 after a timeout of 3 seconds
  // clear clears the timeout, so that count is not set to 0 after delay
  // reset resets the timeout, so that count will set to 0 after delay
  // useTimeout takes in 2 parameters
  // - a callback function, in this case, set count to 0
  // - a delay, in this case, 3 seconds
  const [clear, reset] = useTimeout(() => setCount(0), 3000)

  return (
    <div className="section">
      <h2>useTimeout</h2>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
