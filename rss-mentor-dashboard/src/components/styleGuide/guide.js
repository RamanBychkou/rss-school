import React from 'react';
import './guide.css';

const Guide = () => {
  const colorTasks = ['toDo', 'inProgress', 'checking', 'checked'];
  return (
    <section className="guide">
      <h2>Style Guide</h2>
      <div className="guideWrapper">
        {colorTasks.map(current => (
          <div key={current} className={current}>
            <h3>{current}</h3>
          </div>
        ))}
      </div>

    </section>
  );
};
export default Guide;
