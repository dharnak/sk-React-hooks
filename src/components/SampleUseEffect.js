import React, {useState, useEffect} from 'react'

const SampleUseEffect = () => {
  const [count, setCount] = useState(0);



  // This Effect will executes only on the intial Render
  useEffect(() => {
    console.log('Component Mounted');
  },[]);



  // This Effect will executes whenever the count state variable updates
  useEffect(() => {
    console.log('Captured count variable updation');
  },[count]);



  return (
    <div style={{width: 'fit-content', margin: '30px auto'}}>
      <h2 className='mt-3'><u>useEffect Hook</u></h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <nav className="nav justify-content-end">
          <a className="m-2 p-2 text-primary " role='button' style={{textDecoration: 'none'}} href="/cleanup"><u>Try Clean Up Function</u></a>
          <a className="m-2 p-2 text-primary " role='button' style={{textDecoration: 'none'}} href="/fetchfact"><u>Real Example</u></a>
      </nav>
  </div>
  );
}

export default SampleUseEffect