import React, {useState} from 'react'

const StateObject = () => {

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

  return (
    <section style={{width: 'fit-content', margin: '30px auto'}}>
        <button className='btn btn-outline-dark mb-5' onClick={()=>window.location.href="/"}><i class="bi bi-arrow-left-circle"></i> Back</button>
        <h3>Example - Object:</h3>
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
        <div className='mt-3'>
          <h4>Syntax:</h4>
          <div>
            <p>{`setVariable(`}<code>prevValue</code>{`=>{`}</p>
            <p>{`return {`}<code>...prevValue</code>{`, propertyName: newValue}`}</p>
            <p>{`})`}</p>
          </div>
        </div>
    </section>
  )
}

export default StateObject