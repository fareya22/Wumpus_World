import React from 'react';

const ControlPanel = ({ onGenerateEnvironment, onMoveAgent }) => {
  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      <button onClick={onGenerateEnvironment}>Generate Environment</button>
      <button onClick={onMoveAgent}>Move Agent</button>
    </div>
  );
};

export default ControlPanel;