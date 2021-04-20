import {useEffect, useReducer} from 'react'

function resolvePromise(promise) {
  if (typeof promise === 'function') {
    return promise()
  }

  return promise
}

const states = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved'
}

const defaultState = {
  error: undefined,
  result: undefined,
  state: states.PENDING
}

function reducer(state, action) {
  switch (action.type) {
    case states.PENDING:
      return defaultState
    case states.RESOLVED:
      return {
        error: undefined,
        result: action.payload,
        state: states.RESOLVED
      }
    case states.REJECTED:
      return {
        error: action.payload,
        result: undefined,
        state: states.REJECTED
      }
    default:
      return state
  }
}

function usePromise(promise, inputs) {
  const [{error, result, state}, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    promise = resolvePromise(promise)
    if (!promise) {
      return
    }
    let canceled = false
    dispatch({type: states.PENDING})
    promise.then(
      result =>
        !canceled &&
        dispatch({
          payload: result,
          type: states.RESOLVED
        }),
      error =>
        !canceled &&
        dispatch({
          payload: error,
          type: states.REJECTED
        })
    )
    return () => {
      canceled = true
    }
  }, inputs)

  return [result, error, state]
}

export default usePromise
