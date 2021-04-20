import {Children as ReactChildren, forwardRef} from 'react'
import PropTypes from 'prop-types'
import {
  typeOf,
  Element as isElement,
  Fragment as isFragment,
  Portal as isPortal,
  ContextProvider as isContextProvider,
  ContextConsumer as isContextConsumer
} from 'react-is'

import cloneElementReferenced from '../helpers/cloneElementReferenced'

const Children = forwardRef((props, ref) => {
  const currentNode =
    typeof props.children === 'string' ? (
      <span>{props.children}</span>
    ) : (
      props.children
    )
  let {children, style} = currentNode.props
  const childrenProps = children.props || {}
  switch (typeOf(currentNode)) {
    case isElement:
      break
    case isPortal:
    case isFragment:
    case isContextProvider:
    case isContextConsumer:
    default:
      children = ReactChildren.map(children, child => (
        <Children {...childrenProps}>{child}</Children>
      ))
      break
  }
  return cloneElementReferenced(
    currentNode,
    {
      ...props,
      ...childrenProps,
      style: {...style, ...props.style},
      ref
    },
    ...children
  )
})

Children.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.object
}
Children.defaultProps = {}
Children.displayName = 'Children'

Children.map = (child, callback = elem => elem) =>
  ReactChildren.map(child, (children, key) => {
    const element =
      typeof children === 'string'
        ? [<span key={1}>{children}</span>]
        : ReactChildren.only(children)
    const props = children.props
    const ref = children.ref
    delete children.props
    delete children.ref
    const Node = (
      <Children ref={ref} {...props}>
        {element}
      </Children>
    )
    return callback(Node, key)
  })

Children.forEach = ReactChildren.forEach
Children.only = ReactChildren.only
Children.toArray = ReactChildren.toArray

export default Children
