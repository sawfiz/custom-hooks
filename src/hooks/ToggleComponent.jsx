import useToggle from './useToggle';

function App() {
  // useToggle
  const [theValue, setTheValue] = useToggle(false);

  return (
    <>
      <div>
        <button onClick={setTheValue}>Toggle</button>
        <button onClick={() => setTheValue(true)}>Make True</button>
        <button onClick={() => setTheValue(false)}>Make False</button>
      </div>
      <div>{theValue.toString()}</div>
    </>
  );
}

export default App;
