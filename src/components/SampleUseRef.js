import React, { useRef, useState } from 'react'

const SampleUseRef = () => {

  const fullnameRef = useRef(null)
  const [fullname, setfullname] = useState('')


  const handleUpdate = () =>{
    setfullname(fullnameRef.current.value)
  }


  return (
    <div style={{width: 'fit-content', margin: '0 auto'}}>
      <h2 className='mt-3'><u>useRef Hook</u></h2>
      <form>
        <label htmlFor='fullname'>Fullname</label>
        <input onChange={handleUpdate} ref={fullnameRef} type='text' placeholder='Enter your name' id='fullname' />
      </form>
      <p>Entered Name: {fullname}</p>
    </div>
  )
}

export default SampleUseRef