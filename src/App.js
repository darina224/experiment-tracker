import { useState } from 'react';

function App() {
  const [experiments, setExperiments] = useState([]);
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState('План');
  const [filterStatus, setFilterStatus] = useState('Все');

  const addExperiment = () => {
    if (newName.trim() === '') return;
    const newExp = {
      id: Date.now(),
      name: newName,
      status: newStatus,
    };
    setExperiments([...experiments, newExp]);
    setNewName('');
    setNewStatus('План');
  };

  const filtered = filterStatus === 'Все' 
  ? experiments 
  : experiments.filter(e => e.status === filterStatus);

  return (
    <div style={{ padding: 20 }}>
      <h1>Учёт экспериментов</h1>

      <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
        <h3>Добавить эксперимент</h3>
        <input
          type="text"
          placeholder="Название"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
          <option>План</option>
          <option>В процессе</option>
          <option>Завершён</option>
        </select>
        <button onClick={addExperiment}>Добавить</button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
        <h3>Фильтр по статусу</h3>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option>Все</option>
          <option>План</option>
          <option>В процессе</option>
          <option>Завершён</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {filtered.map(exp => (
          <div key={exp.id} style={{ border: '1px solid #ccc', borderRadius: 12, padding: 10 }}>
            <strong>{exp.name}</strong>
            <br />
            <select
              value={exp.status}
              onChange={(e) => {
                const updated = experiments.map(item =>
                  item.id === exp.id ? { ...item, status: e.target.value } : item
                );
                setExperiments(updated);
              }}
            >
              <option>План</option>
              <option>В процессе</option>
              <option>Завершён</option>
            </select>
            <br />
            <button
              onClick={() => {
                setExperiments(experiments.filter(e => e.id !== exp.id));
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;