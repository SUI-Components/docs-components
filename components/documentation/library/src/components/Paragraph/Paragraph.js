/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Paragraph.scss'

/**
 * The HTML `p` element represents a paragraph.
 * */
const Paragraph = ({children, className, elementType = 'p', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-paragraph', className)}
  >
    {children}
  </Base>
)
Paragraph.displayName = 'Paragraph'
Paragraph.propTypes = {}
Paragraph.defaultProps = {}

export default Paragraph

export {Paragraph}
