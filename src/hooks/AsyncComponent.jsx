import React from 'react';
import useAsync from './useAsync';

export default function AsyncComponent() {
  const {loading, error, value} = useAsync(() =>{
    return new Promise ((resolve, reject) => {
      const success = true
      setTimeout (()=>{
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  }, [])

  return (
    <div className="section">
      <h2>useAsync</h2>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
}
