/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

/**
 * HTML `code` element DOC styled
 */
const Code = ({children, className, elementType = 'code', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-code', className)}
  >
    {children}
  </Base>
)
Code.displayName = 'Code'
Code.propTypes = {}
Code.defaultProps = {}

export default Code

export {Code}
