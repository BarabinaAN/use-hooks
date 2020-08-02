import React, { useState, useEffect } from 'react'


const Counter = () => {
   const [number, setCounter] = useState(0)
   const [visible, changeVisible] = useState(true)

   useEffect(() => {
      const timeout = setTimeout(() => {
         changeVisible(false)    
      }, 3000 )
      return () => clearTimeout(timeout)
   }, [])
   

   if (visible) {
      return (
         <div>
            <h2>Use effects</h2>
            <h3>{number}</h3>
            <div>
               <button onClick={() => setCounter((more) => more + 1)}>Larger</button>
               <button onClick={() => changeVisible(false)}>Hide</button>
            </div>
         </div>
      )
   } else {
      return (
         <div>
            <button onClick={() => changeVisible(true)}>Show</button>
         </div>
      )
   }
}

export default Counter