import { DependencyList, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// hooks
import useMountedState from '@/hooks/useMountedState'

const API_URL = 'https://hahow-recruit.herokuapp.com/'
const instance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

interface AxiosInterface<ParamObject> {
  method: 'get' | 'post' | 'patch'
  url: string
  headers?: { [key: string]: string }
  params?: ParamObject
  data?: unknown
}

export default function useAxiosData<ResponseObject = any, ParamObject = any>(
  axiosParams: AxiosInterface<ParamObject>,
  deps: DependencyList = [],
  isPassAllowed = true
) {
  const [response, setResponse] = useState<ResponseObject>()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const check = useMountedState()

  const fetchData = useCallback(
    async (params: AxiosInterface<ParamObject>, isPassAllowed?: boolean) => {
      if (!isPassAllowed || !check()) return

      setIsLoading(true)

      instance
        .request(params)
        .then((res) => {
          setIsLoading(false)
          setIsError(false)
          setResponse(res.data)
        })
        .catch((err) => {
          setIsError(true)
          console.log(err)
        })
    },
    []
  )

  const reFetchData = (isPassAllowed: boolean) => {
    fetchData(axiosParams, isPassAllowed)
  }

  useEffect(() => {
    fetchData(axiosParams, isPassAllowed)
  }, deps)

  return { response, isError, isLoading, reFetchData }
}
