import useToggle from './useToggle';

function App() {
  // useToggle
  const [theValue, setTheValue] = useToggle(false);

  return (
    <>
      <div className="section">
        <h2>useToggle</h2>
        <button onClick={setTheValue}>Toggle</button>
        <button onClick={() => setTheValue(true)}>Make True</button>
        <button onClick={() => setTheValue(false)}>Make False</button>
        <div>{theValue.toString()}</div>
      </div>
    </>
  );
}

export default App;
