/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Button.scss'

/**
 * HTML `button` element DOC styled. Triggers an operation on click.
 */
const Button = forwardRef(
  (
    {children, elementType = 'button', outline, className, ...props},
    forwardedRef
  ) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx(
        'sui-studio-doc-button',
        {
          'sui-studio-doc-button-outline': outline
        },
        className
      )}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
Button.displayName = 'Button'
Button.propTypes = {}
Button.defaultProps = {}

/**
 * HTML wrapper to group multiple `button` HTML elements DOC styled.
 */
const ButtonGroup = forwardRef(
  (
    {className, children, elementType = 'div', outline, ...props},
    forwardedRef
  ) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx(
        'sui-studio-doc-button-group',
        {
          'sui-studio-doc-button-group-outline': outline
        },
        className
      )}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)

ButtonGroup.displayName = 'ButtonGroup'
ButtonGroup.propTypes = {}
ButtonGroup.defaultProps = {}

export default Button

export {Button, ButtonGroup}
