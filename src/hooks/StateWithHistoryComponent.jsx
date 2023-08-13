import React, {useState} from 'react';
import useStateWithHistory from './useStateWithHistory';

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState('Kyle');

  return (
    <div className="section">
      <h2>useStateWithHistory</h2>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c * 2)}>Double</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  );
}
