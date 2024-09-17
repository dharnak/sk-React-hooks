import React, { useEffect } from 'react';

const CleanupExample = () => {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Cleanup');
    };
  },[]); // Empty dependency array

  return (
    <div>
      <p>This component will log to the console when mounted and unmounted.</p>
    </div>
  );
};

export default CleanupExample;
