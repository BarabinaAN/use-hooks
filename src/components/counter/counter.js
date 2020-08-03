import React, { useState, useEffect } from 'react'
import Information from '../information'

const Counter = () => {
   const [number, setCounter] = useState(1)
   const [visible, changeVisible] = useState(true)

   useEffect(() => {
      const timeout = setTimeout(() => {
         changeVisible(false)
      }, 3000)
      return () => clearTimeout(timeout)
   }, [])



   return (
      <div>
         {visible && <h2>Use effects</h2>}
         <Information id={number} />
         <div>
            <button onClick={() => setCounter((more) => more + 1)}>Larger</button>
            {visible
               ? <button onClick={() => changeVisible(false)}>Hide Title</button>
               : <button onClick={() => changeVisible(true)}>Show Title</button>
            }
         </div>
      </div>
   )
}

export default Counter