import { DependencyList, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// hooks
import useMountedState from '@/hooks/useMountedState'

const API_URL = 'https://hahow-recruit.herokuapp.com/'
const instance = axios.create({
  baseURL: `${API_URL}`,
})

interface AxiosInterface<ParamObject> {
  method: 'get' | 'post' | 'patch'
  url: string
  headers?: { [key: string]: string }
  params?: ParamObject
  data?: Object
}

export default function useAxiosData<ResponseObject = any, ParamObject = any>(
  axiosParams: AxiosInterface<ParamObject>,
  deps: DependencyList = [],
  isPassAllowed: boolean = true
) {
  const [response, setResponse] = useState<ResponseObject>()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const check = useMountedState()

  const fetchData = useCallback(
    async (params: AxiosInterface<ParamObject>, isPassAllowed?: boolean) => {
      if (!isPassAllowed) return

      instance
        .request(params)
        .then((res) => {
          if (!check()) return
          setIsError(false)
          setIsLoading(true)
          setResponse(res.data)
        })
        .catch((err) => {
          if (!check()) return
          setIsError(true)
          console.log(err)
        })
        .then(() => {
          if (!check()) return
          setIsLoading(false)
        })
    },
    []
  )

  const reFetchData = () => {
    fetchData(axiosParams, isPassAllowed)
  }

  useEffect(() => {
    fetchData(axiosParams, isPassAllowed)
  }, deps)

  return { response, isError, isLoading, reFetchData }
}
