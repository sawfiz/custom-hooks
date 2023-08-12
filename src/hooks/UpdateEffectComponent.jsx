import React, { useState, useEffect } from 'react';
import useUpdateEffect from './useUpdateEffect';

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  // useEffect(() => console.log(count), [count]);
  useUpdateEffect(() => console.log(count), [count]);

  return (
    <div className="section">
      <h2>UpdateEffectComponent</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
