import React, {forwardRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Base from '../Base.core'

import './Input.scss'

/**
 * HTML `input` element DOC styled
 */
const Input = forwardRef(
  ({children, className, elementType = 'input', ...props}, forwardedRef) => {
    return (
      <Base
        {...props}
        elementType={elementType}
        className={cx('sui-studio-doc-input', className)}
        ref={forwardedRef}
      />
    )
  }
)

Input.displayName = 'Input'
Input.propTypes = {
  /**
   * element class
   */
  className: PropTypes.bool,
  /**
   * element type
   */
  elementType: PropTypes.string,
  /**
   * children
   */
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element])
}

Input.defaultProps = {}

export default Input

export {Input}
