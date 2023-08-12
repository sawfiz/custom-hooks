import React, { useState } from 'react';
import useDebounce from './useDebounce';

export default function DebounceComponent() {
  const [text, setText] = useState('AAA');
  useDebounce(() => alert(text), 1000, [text]);

  return (
    <div className="section">
      <h2>useDebounce</h2>
      <div>{text}</div>
      <input autoFocus onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}
