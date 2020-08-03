import { useState, useEffect, useMemo } from 'react'


const useRequest = (request) => {
   const init = useMemo(() => ({
      data: null,
      loading: true,
      error: null
   }), [])

   const [ dataState, setDataState] = useState(init)
   
   useEffect(() => {
      setDataState(init)
      let cancelled = false

      request()
         .then(data => !cancelled && setDataState({
            data,
            loading: false,
            error: null
         }))
         .catch(error => !cancelled && setDataState({
            data: null,
            loading: true,
            error
         }))

      return () => cancelled = true
   }, [ request, init ])

   return dataState
}

export default useRequest