import React, {useState, useEffect} from 'react'

const RealTimeUseEffect = () => {
    
  const [advice, setAdvice] = useState(null)

  const adviceAPI = 'https://api.adviceslip.com/advice'

  useEffect(()=>{

    fetch(adviceAPI)
    .then(res=>res.json())
    .then(data=>{
        console.log('Received Data: ',data)
      if(data.slip&&data.slip.advice!==''){
        setAdvice(data.slip.advice)
      }
    })
    .catch(err=>{
      console.log('Error in fetching data: ',err)
    })

  },[])

  return (
    <div style={{width: 'fit-content', margin: '30px auto'}}>
        {
            (advice===null)?
            <p>Loading ...</p>:
            <p><b>Fetched Data: </b>{advice}</p>
        }
    </div>
  )
}

export default RealTimeUseEffect