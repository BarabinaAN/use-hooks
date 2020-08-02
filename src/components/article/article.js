import React, { useContext } from 'react'
import { MyContext } from '../context'


const Article = () => {
   const value = useContext(MyContext)
   
   return (
      <article>
         <h2>Use constext</h2>
         <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat...."
          </p>
          <p>{value}</p>
      </article>
   )
}

export default Article