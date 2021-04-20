import {useEffect} from 'react'

/**
 *
 * useMutationObserver hook
 *
 * Returns a mutation observer for a React Ref and fires a callback
 *
 * @param ref React ref on which mutations are to be observed
 * @param callback Function that needs to be fired on mutation
 * @param options
 */

const useMutationObserver = (ref, callback, options) => {
  useEffect(() => {
    // Create an observer instance linked to the callback function
    if (ref.current) {
      const observer = new MutationObserver(callback)

      // Start observing the target node for configured mutations
      observer.observe(ref.current, options)
      return () => {
        // closes the observer before unmounting.
        observer.disconnect()
      }
    }
  }, [callback, options, ref])
}

export default useMutationObserver
