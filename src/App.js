import { useState } from 'react';

function App() {
  const [experiments, setExperiments] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Учёт экспериментов</h1>
      <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
        <h3>Добавить эксперимент</h3>
        <input type="text" placeholder="Название" />
        <select>
          <option>План</option>
          <option>В процессе</option>
          <option>Завершён</option>
      </select>
      <button>Добавить</button>
      </div>
    </div>
  );
}

export default App;