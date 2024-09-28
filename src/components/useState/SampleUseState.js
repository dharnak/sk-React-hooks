import React, { useState } from 'react'

const SampleUseState = () => {

  let JsCount = 0

  const [count, setCount] = useState(0)


  const updateJsVariable = (exp) => {
    if(exp==='+')
      JsCount=JsCount+1
    else if(exp==='-')
      JsCount=JsCount-1
    console.log('Js Variable: ',JsCount)
  }

  


  return (
    <div className='text-center'>
      <h2 className='mt-3'><u>useState Hook</u></h2>
      <section className='p-3 d-flex flex-wrap justify-content-around'>
        <div className='border rounded p-5 m-2 col-11 col-md-10 col-lg-5 col-xl-4'>
          <h3>Js variable - Counter:</h3>
          <p>Count Value: {JsCount}</p>
          <button className='btn btn-danger m-2' onClick={()=>updateJsVariable('-')}>Substract 1</button>
          <button className='btn btn-success m-2' onClick={()=>updateJsVariable('+')}>Add 1</button>
          <p><i className="bi bi-info-circle"></i> <b>Open Console to view update</b> - Js variable is updated, but the updated value will not reflect on a React's component until a re-render happens. And on re-render the updated Js variable will be erased and default assigned value will be displayed.</p>
        </div>
        <div className='border rounded p-5 m-2 col-11 col-md-10 col-lg-5 col-xl-4'>
          <h3>State variable - Counter:</h3>
          <p>Count Value: {count}</p>
          <button className='btn btn-danger m-2' onClick={()=>setCount(count-1)}>Substract 1</button>
          <button className='btn btn-success m-2' onClick={()=>setCount(count+1)}>Add 1</button>
        </div>
      </section>
      <section>
        <button className='btn btn-outline-dark m-2' onClick={()=>window.location.href="/usestate-object"}>View Object Example</button>
        <button className='btn btn-outline-dark m-2' onClick={()=>window.location.href="/usestate-array"}>View Array Example</button>
      </section>

    </div>
  )
}

export default SampleUseState