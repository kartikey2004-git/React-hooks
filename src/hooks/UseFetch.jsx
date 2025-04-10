import { useState } from "react";

const UseFetch = (cb) => {

  // cb : callback function where it fetching the API

  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  // this function allows us to trigger API where we want

  // fn takes arguments that we need to pass like while making an API call

  const fn = async (...args) => {
    setLoading(true)
    setError(null)

    try {
      const response = await cb(...args);
      setData(response)
      setError(null)

    } catch (error) {
      setError(error)
      window.alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading , error , data , fn }
}

export default UseFetch


// inside of what sets custom hook apart  is basically it ability to acces react superpower , it can be normal function as well


// custom hooks has all powers of react like all features and hooks of react...


