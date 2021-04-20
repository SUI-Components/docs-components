import {useEffect, useState, useCallback} from 'react'
import useMutationObserver from '../useMutationObserver/useMutationObserver'

const useComputedStyle = (ref, styleName, callback = () => null) => {
  const [, setRef] = useState()
  const [, setValue] = useState()
  const update = useCallback(
    ref => {
      const computedValue = getComputedStyle(ref.current).getPropertyValue(
        styleName
      )
      setValue(computedValue)
      callback(computedValue)
    },
    [setValue, styleName, callback]
  )
  useMutationObserver(
    ref,
    mutations => {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'style') {
          update(ref)
        }
      })
    },
    {
      attributes: true,
      attributeFilter: ['style']
    }
  )
  useEffect(() => {
    setRef(ref)
    update(ref)
  }, [setRef, setValue, ref])
}

export default useComputedStyle
