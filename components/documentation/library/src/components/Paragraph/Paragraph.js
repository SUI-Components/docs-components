/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Paragraph.scss'

/**
 * The HTML `p` element represents a paragraph.
 * */
const Paragraph = forwardRef(
  ({children, className, elementType = 'p', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-paragraph', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
Paragraph.displayName = 'Paragraph'
Paragraph.propTypes = {}
Paragraph.defaultProps = {}

export default Paragraph

export {Paragraph}
