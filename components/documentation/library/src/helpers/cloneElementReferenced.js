import {cloneElement} from 'react'

const cloneElementReferenced = (element, config = {}, ...children) => {
  const cloneRef = config.ref
  const originalRef = element.ref
  const props = element.props

  if (originalRef == null || cloneRef == null) {
    return cloneElement(element, config, ...children)
  }

  cloneElement(
    element,
    {
      ...props,
      ref: node =>
        [cloneRef, originalRef].forEach(ref => {
          if (typeof ref === 'function') ref(node)
          else if (ref !== null) ref.current = node
        })
    },
    children
  )
}

export default cloneElementReferenced
