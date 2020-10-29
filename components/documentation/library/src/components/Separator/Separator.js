/* eslint react/prop-types: 0 */
import React, {useContext} from 'react'
import cx from 'classnames'

import Context from '../../context/Mode'
import Base, {MODES} from '../Base.core'

/**
 * The HTML `hr` element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
const Separator = ({
  children,
  className,
  elementType = 'span',
  mode,
  ...props
}) => {
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
      >
        {children}
      </Base>
    </div>
  )
}

Separator.displayName = 'Separator'
Separator.propTypes = {}
Separator.defaultProps = {}

export default Separator

export {Separator}
