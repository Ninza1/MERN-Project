import React,{useState} from 'react'

export const Toggle = () => { 
    const [count, setCount] = useState(false)

  return (
    <div>
    {count ? <h2>show comp</h2> : <h2>hide comp</h2> }
    <button onClick={()=> setCount(!count)}>show</button>
    {/* <button onClick={()=> setCount(false)}>show</button> */}
        this is a toggle
        
    </div>
  )
}
