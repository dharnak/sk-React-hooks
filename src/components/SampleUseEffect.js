import React, {useState, useEffect} from 'react'

const SampleUseEffect = () => {
  const [count, setCount] = useState(0);
  let jsCount = 0



  // This Effect will executes only on the intial Render
  useEffect(() => {
    console.log('Component Mounted');
  },[]);



  // This Effect will executes whenever the count state variable updates
  useEffect(() => {
    console.log('Captured count variable updation');
  },[count]);

  const updateVar = () => {
    console.log("Var before updation: ",jsCount)
    setCount(count + 1)
    jsCount=jsCount+1
    console.log("Var after updation: ",jsCount)
  }

  console.log("Var in Component: ",jsCount)

  return (
    <div style={{width: 'fit-content', margin: '30px auto'}}>
      <h2 className='mt-3'><u>useEffect HOOK</u></h2>
      <div className='d-flex justify-content-between'>
      <p className='m-3 border p-2 rounded'>Count(useState variable): {count}</p>
      <p className='m-3 border p-2 rounded'>Count(Js variable): {jsCount}</p>
      </div>
      <button onClick={() => {updateVar()}}>Increment</button>
      
      <nav className="nav justify-content-end">
          <a className="m-2 p-2 text-primary " role='button' style={{textDecoration: 'none'}} href="/cleanup"><u>Try Clean Up Function</u></a>
          <a className="m-2 p-2 text-primary " role='button' style={{textDecoration: 'none'}} href="/fetchfact"><u>Real Example</u></a>
      </nav>
  </div>
  );
}

export default SampleUseEffect