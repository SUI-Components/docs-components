/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Label.scss'

/**
 * The HTML `label` element represents a caption for an item in a user interface.
 */
const Label = forwardRef(
  ({children, className, elementType = 'label', ...props}, forwardedRef) => (
    <Base
      {...props}
      className={cx('sui-studio-doc-label', className)}
      elementType={elementType}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
Label.displayName = 'Label'
Label.propTypes = {}
Label.defaultProps = {}

export default Label

export {Label}
