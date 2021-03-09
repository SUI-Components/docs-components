/* eslint react/prop-types: 0 */
import React, {useContext, forwardRef} from 'react'
import cx from 'classnames'

import Context from '../../context/Mode'
import Base, {MODES} from '../Base.core'

import './Separator.scss'

/**
 * The HTML `hr` element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
const Separator = forwardRef(
  ({children, className, elementType, mode, ...props}, forwardedRef) => {
    const contextProps = useContext(Context) || {}
    const ownMode = mode || contextProps.mode
    return (
      <div
        className={cx(
          'sui-studio-doc-separator',
          {
            [`sui-studio-doc-separator-mode-${ownMode}`]: ownMode
          },
          className
        )}
      >
        <hr />
        <Base
          {...props}
          className={cx('sui-studio-doc-separator-content', className)}
          elementType={elementType}
          {...{
            ...contextProps,
            mode: ownMode === MODES.LIGHT ? MODES.DARK : MODES.LIGHT
          }}
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
