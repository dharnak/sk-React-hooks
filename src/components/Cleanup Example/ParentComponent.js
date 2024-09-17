import React, { useState } from 'react';
import CleanupExample from './CleanupExample'; // Import your component

const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Cleanup Example
      </button>
      {showComponent && <CleanupExample />}
    </div>
  );
};

export default ParentComponent;
