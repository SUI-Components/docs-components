/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Quote.scss'

/**
 * The HTML `q` element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.
 */
const Quote = forwardRef(
  ({children, className, elementType = 'q', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-quote', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
Quote.displayName = 'Quote'
Quote.propTypes = {}
Quote.defaultProps = {}

export default Quote

export {Quote}
