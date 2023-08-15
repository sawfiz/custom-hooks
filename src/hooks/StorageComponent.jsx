import React from 'react';
import {useLocalStorage, useSessionStorage} from './useStorage';

export default function StorageComponent() {
const [name, setName, removeName] = useLocalStorage("name", "Kyle")
const [age, setAge, removeAge] = useSessionStorage("age", 26)

  return (
    <div className="section">
      <h2>useStorage</h2>
      <div>{name} - {age}</div>
      <button onClick={()=>setName("John")}>Set Name</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={()=>setAge(40)}>Set Age</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}
