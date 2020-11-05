/* eslint react/prop-types: 0 */
import {createElement} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {withConditionalProvider} from '../Base.core'

import './Box.scss'

/**
 * A Box can be used to display content related to a single subject DOC styled
 */
let Box = ({
  children,
  className,
  elementType,
  fullScreen,
  outline,
  mode,
  color,
  ...props
}) => {
  const styleColorProps = {}
  if (color) {
    styleColorProps.borderColor = color
    if (!outline) {
      styleColorProps.background = color
    }
  }
  return createElement(
    elementType,
    {
      ...props,
      className: cx(
        'sui-studio-doc-box',
        {
          [`sui-studio-doc-box-mode-${mode}`]: mode,
          'sui-studio-doc-box-full-screen': fullScreen,
          'sui-studio-doc-box-outline': outline
        },
        className
      ),
      style: {...props.style, ...styleColorProps}
    },
    children
  )
}

Box = withConditionalProvider(Box)
Box.displayName = 'Box'

Box.propTypes = {
  outline: PropTypes.bool,
  elementType: PropTypes.string
}
Box.defaultProps = {
  elementType: 'div'
}

export default Box

export {Box}
