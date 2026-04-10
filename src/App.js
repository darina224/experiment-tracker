import { useState } from 'react';

function App() {
  const [experiments, setExperiments] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Учёт экспериментов</h1>
    </div>
  );
}

export default App;