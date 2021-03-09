/* eslint react/prop-types: 0 */
import React, {useState, useEffect, forwardRef} from 'react'
import PropTypes from 'prop-types'
import ExtraPropTypes from 'react-extra-prop-types'
import cx from 'classnames'
import {IconContext} from 'react-icons'

import Base from '../Base.core'

import './FlatColorIcon.scss'

/**
 * Flat Color Icon DOC styled
 */
const FlatColorIcon = forwardRef(
  (
    {
      className,
      icon,
      color,
      children,
      elementType = 'span',
      fullWidth = true,
      title,
      size,
      ...props
    },
    forwardedRef
  ) => {
    const [IconElement, setIconElement] = useState(() => () => null)
    useEffect(() => {
      if (icon) {
        import('react-icons/fc')
          .then(module => module[icon])
          .then(Element => {
            setIconElement(() => Element || IconElement)
          })
      }
    }, [icon, IconElement])
    return (
      <Base
        {...props}
        elementType={elementType}
        className={cx(
          'sui-studio-doc-icon sui-studio-doc-icon-flat-color',
          className
        )}
        fullWidth={fullWidth}
        ref={forwardedRef}
      >
        <IconContext.Provider
          value={{
            color: color,
            style: {verticalAlign: 'middle', textAlign: 'center'}
          }}
        >
          <IconElement size={size} title={title} />
        </IconContext.Provider>
      </Base>
    )
  }
)
FlatColorIcon.displayName = 'FlatColorIcon'
FlatColorIcon.propTypes = {
  /**
   * icon color
   */
  color: ExtraPropTypes.color,
  /**
   * Icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon size
   */
  size: PropTypes.string,
  /**
   * Icon description for accessibility
   */
  title: PropTypes.string
}
FlatColorIcon.defaultProps = {}

export default FlatColorIcon

export {FlatColorIcon}
