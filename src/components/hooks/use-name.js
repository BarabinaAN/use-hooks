import { useCallback } from 'react'
import { getName, useRequest } from './index'


const useName = (id) => {
   const request = useCallback(() => getName(id), [id])
   return useRequest(request)
}

export default useName