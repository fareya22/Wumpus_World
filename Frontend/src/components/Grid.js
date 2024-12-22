import React from 'react';
import './Grid.css'; // Optional CSS for styling

const Grid = ({ grid, agentPosition }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            const isAgentHere =
              agentPosition[0] === rowIndex && agentPosition[1] === colIndex;
            return (
              <div
                className={`cell ${isAgentHere ? 'agent' : ''}`}
                key={colIndex}
              >
                {isAgentHere ? '🤖' : cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;