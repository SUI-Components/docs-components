import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Base from '../Base.core'

/**
 * HTML `input` element DOC styled
 */
const Input = ({children, className, elementType = 'input', ...props}) => {
  return (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-input', className)}
    />
  )
}

Input.displayName = 'Input'
Input.propTypes = {
  /**
   * element class
   */
  className: PropTypes.bool,
  /**
   * element type
   */
  elementType: PropTypes.bool,
  /**
   * children
   */
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element])
}

Input.defaultProps = {}

export default Input

export {Input}