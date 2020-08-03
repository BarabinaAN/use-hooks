import React from 'react'
import { useName } from '../hooks'


const Information = ({ id }) => {
   const { data, loading, error} = useName(id)
   const hasError = error && <h3>something wrong</h3>
   const hasLoading = loading && <h3>loading...</h3>
   const content = data && <h3>{id} - {data.name}</h3>

   return <>
      {hasError}
      {hasLoading}
      {content}
   </>
}

export default Information