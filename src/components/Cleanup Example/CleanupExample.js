import React, { useEffect, useState } from 'react';

const CleanupExample = () => {

  const [count, setCount] = useState('sk')
  
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Cleanup');
    };
  },[]); // Empty dependency array


  useEffect(()=>{
    console.log('Count value updated!')

    return()=>{
      console.log('Returning Count value updation!')
    }
  }, [count])


  
  return (
    <div>
      <p onClick={()=>setCount('arav')}>This component will log to the console when mounted and unmounted.{count}</p>
    </div>
  );
};

export default CleanupExample;
