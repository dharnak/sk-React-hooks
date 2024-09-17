import React, {useState, useEffect} from 'react'

const RealTimeUseEffect = () => {
    
  const [fact, setFact] = useState(null)

  useEffect(()=>{

    fetch('https://catfact.ninja/fact')
    .then(res=>res.json())
    .then(data=>{
      console.log('data: ',data)
      if(data.fact&&data.fact!==''){
        setFact(data.fact)
      }
    })
    .catch(err=>{
      console.log('Error in fetching data: ',err)
    })

  },[])

  return (
    <div style={{width: 'fit-content', margin: '30px auto'}}>
        {
            (fact===null)?
            <p>Loading ...</p>:
            <p><b>Fetched Fact: </b>{fact}</p>
        }
    </div>
  )
}

export default RealTimeUseEffect