import fetch from 'isomorphic-fetch'
import usePromise from '../../hooks/usePromise/usePromise'

const useColorAPINameHook = ({HEXColor, name}, callback = () => null) =>
  usePromise(
    () =>
      new Promise(resolve => {
        if (HEXColor !== undefined && name !== null) {
          fetch(`https://www.thecolorapi.com/id?hex=${HEXColor}`)
            .then(response => response.json())
            .then(data => {
              const value = data.name
              callback(value)
              resolve(value)
            })
        } else {
          resolve({})
        }
      }),
    [HEXColor, name]
  )

export default useColorAPINameHook
