import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const increment = () => setState((prev) => prev + 1);

  return (
    <div className='App'>
      <h1 style={{ fontSize: 50, color: 'black' }}>value = {state}</h1>
      <button
        style={{ background: 'red', color: 'white', padding: 15 }}
        onClick={increment}
      >
        incremernting!
      </button>
    </div>
  );
}

export default App;
