/* eslint react/prop-types: 0 */
import React, {useContext, forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Separator.scss'

/**
 * The HTML `hr` element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
const Separator = forwardRef(
  ({children, className, elementType, mode, ...props}, forwardedRef) => {
    return (
      <div
        data-theme-mode={mode}
        className={cx('sui-studio-doc-separator', className)}
      >
        <hr />
        <Base
          {...props}
          className={cx('sui-studio-doc-separator-content', className)}
          elementType={elementType}
          mode={mode}
          ref={forwardedRef}
        >
          {children}
        </Base>
      </div>
    )
  }
)
Separator.displayName = 'Separator'
Separator.propTypes = {}
Separator.defaultProps = {
  elementType: 'span'
}

export default Separator

export {Separator}
