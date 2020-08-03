import React from 'react'
import { useName } from '../hooks'


const Information = ({ id }) => {
   const name = useName(id)

   return <h3>{id} - {name}</h3>
}

export default Information