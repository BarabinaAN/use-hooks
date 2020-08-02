import React, { useState } from 'react'


const Switcher = () => {
   const [ color, changeColor ] = useState('#fff')
   const [ fontSize, changeFontSize ] = useState(16)

   const customStyle = {
      padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
   }
   
   return (
      <div style={customStyle}>
         <h3>Click on button - change block</h3>
         <div>
            <button onClick={() => changeColor('#ccc')}>Dark</button>
            <button onClick={() => changeColor('#fff')}>Light</button>
         </div>
         <div>
            <button onClick={() => changeFontSize((size) => size + 2)}>Larger</button>
            <button onClick={() => changeFontSize((size) => size - 2)}>Smaller</button>
         </div>
      </div>
   )
}

export default Switcher