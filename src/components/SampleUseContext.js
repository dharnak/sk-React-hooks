import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const SampleUseContext = () => {

    const {user} = useContext(DataContext)

  return (
    <div style={{width: 'fit-content', margin: '0 auto'}}>
      <h2 className='mt-3'><u>useContext Hook</u></h2>
      <p>Fetched Value: {user.fullname}</p>
    </div>
  )
}

export default SampleUseContext