/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

/**
 * The HTML `q` element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.
 */
const Quote = ({children, className, elementType = 'q', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-quote', className)}
  >
    {children}
  </Base>
)

Quote.displayName = 'Quote'
Quote.propTypes = {}
Quote.defaultProps = {}

export default Quote

export {Quote}
