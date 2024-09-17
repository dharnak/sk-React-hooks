import React, { useState } from 'react'

const SampleUseState = () => {

  const [count, setCount] = useState(0)

  const [userObj, setUserObj] = useState({
    name: "Alice",
    age: 25,
    location: "New York"
  });

  const updateObject = () => {
    setUserObj(prevUsers => {
      return {...prevUsers, age: 31}
    })
  }
  

  
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ]);
  
  const updateArray = () =>{
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers]; // Copy the array
      updatedUsers[1] = { ...updatedUsers[1], age: 31 }; // Update the user at index 1
      return updatedUsers; // Return the updated array (no extra object)
    });  
  }

  return (
    <div className='text-center'>
      <h2 className='mt-3'><u>useState Hook</u></h2>
      <section style={{width: 'fit-content', margin: '30px auto'}}>
        <h3>Example 1 - Counter:</h3>
        <p>Count Value: {count}</p>
        <button className='btn btn-danger m-2' onClick={()=>setCount(count-1)}>Substract 1</button>
        <button className='btn btn-success m-2' onClick={()=>setCount(count+1)}>Add 1</button>
      </section>
      <section style={{width: 'fit-content', margin: '30px auto'}}>
        <h3>Example 2 - Object:</h3>
        <div className='mx-auto text-start' style={{width: 'fit-content'}}>
          <p className='fw-bold'>{`usersObj: {`}</p>
          <div className='my-1'>
                  <p className='m-0'>name: {`${userObj.name},`}</p>
                  <p className='m-0'>age: {`${userObj.age},`}</p>
                  <p className='m-0'>location: {`${userObj.location} },`}</p>
          </div>
          <p className='fw-bold'>{`}`}</p>
        </div>
        <button className='btn btn-dark m-2' onClick={updateObject}>Update age = 31</button>
      </section>
      <section style={{width: 'fit-content', margin: '30px auto'}}>
        <h3>Example 3 - Array of Object:</h3>
        <div className='mx-auto text-start' style={{width: 'fit-content'}}>
          <p className='fw-bold'>{`users: [`}</p>
          {users.map((data, i)=>{
            return(
              <div className='my-1' key={i}>
                <p className='m-0'>{`{ `}id: {`${data.id},`}</p>
                <p className='m-0'>name: {`${data.name},`}</p>
                <p className='m-0'>age: {`${data.age} },`}</p>
              </div>
            )
          })}
          <p className='fw-bold'>{`]`}</p>
        </div>
        <button className='btn btn-dark m-2' onClick={updateArray}>Update Bob's age = 31</button>
      </section>
    </div>
  )
}

export default SampleUseState