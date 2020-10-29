/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

/**
 * HTML `button` element DOC styled. Triggers an operation on click.
 */
const Button = ({
  children,
  elementType = 'button',
  outline,
  className,
  ...props
}) => (
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
  >
    {children}
  </Base>
)
Button.displayName = 'Button'
Button.propTypes = {}
Button.defaultProps = {}

/**
 * HTML wrapper to group multiple `button` HTML elements DOC styled.
 */
const ButtonGroup = ({
  className,
  children,
  elementType = 'div',
  outline,
  ...props
}) => (
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
  >
    {children}
  </Base>
)

ButtonGroup.displayName = 'ButtonGroup'
ButtonGroup.propTypes = {}
ButtonGroup.defaultProps = {}

export default Button

export {Button, ButtonGroup}
