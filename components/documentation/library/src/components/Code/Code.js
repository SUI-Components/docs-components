/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Code.scss'

/**
 * HTML `code` element DOC styled
 */
const Code = forwardRef(
  ({children, className, elementType = 'code', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-code', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
Code.displayName = 'Code'
Code.propTypes = {}
Code.defaultProps = {}

export default Code

export {Code}
