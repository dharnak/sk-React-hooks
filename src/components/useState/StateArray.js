import React, {useState} from 'react'

const StateArray = () => {

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
    <section style={{width: 'fit-content', margin: '30px auto'}}>
        <button className='btn btn-outline-dark mb-5' onClick={()=>window.location.href="/"}><i class="bi bi-arrow-left-circle"></i> Back</button>
        <h3>Example - Array of Object:</h3>
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
        <div className='mt-3'>
          <h4>Syntax:</h4>
          <div>
            <p>{`setVariable(`}<code>prevValue</code>{`=>{`}</p>
            <p>{`const tempValue = [`}<code>...prevValue</code>{`]`}</p>
            <p>{`tempValue[i]={...tempValue[i], propertyName: newValue}`}</p>
            <p>{`return tempValue`}</p>
            <p>{`})`}</p>
          </div>
        </div>
    </section>
  )
}

export default StateArray