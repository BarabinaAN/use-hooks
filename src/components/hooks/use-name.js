import { useState, useEffect } from 'react'


const useName = (id) => {
   const [ name, setName ] = useState(null)
   
   useEffect(() => {
      let cancelled = false
      fetch(`https://swapi.dev/api/planets/${id}`)
         .then(res => res.json())
         .then(data => !cancelled && setName(data.name)); 
      return () => cancelled = true
   }, [id])

   return name
}

export default useName