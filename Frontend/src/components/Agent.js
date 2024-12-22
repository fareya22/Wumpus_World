import React from 'react';

const Agent = ({ position, knowledgeBase, actions }) => {
  return (
    <div className="agent-info">
      <h2>Agent Information</h2>
      <p><strong>Position:</strong> ({position[0]}, {position[1]})</p>
      <h3>Knowledge Base:</h3>
      <pre>{JSON.stringify(knowledgeBase, null, 2)}</pre>
      <h3>Actions Taken:</h3>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
};

export default Agent;