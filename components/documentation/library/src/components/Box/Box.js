/* eslint react/prop-types: 0 */
import {createElement, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {withDocumentationProvider} from '../Base.core'

import './Box.scss'

/**
 * A Box can be used to display content related to a single subject DOC styled
 */
let Box = forwardRef(
  (
    {
      children,
      className,
      elementType,
      fullScreen,
      outline,
      mode,
      color,
      ...props
    },
    forwardedRef
  ) => {
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
        ...(mode && {'data-theme-mode': mode}),
        className: cx(
          'sui-studio-doc-box',
          {
            'sui-studio-doc-box-full-screen': fullScreen,
            'sui-studio-doc-box-outline': outline
          },
          className
        ),
        style: {...props.style, ...styleColorProps},
        ref: forwardedRef
      },
      children
    )
  }
)

Box = withDocumentationProvider(Box)
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
