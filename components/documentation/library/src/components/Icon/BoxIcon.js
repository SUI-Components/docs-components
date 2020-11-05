/* eslint react/prop-types: 0 */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ExtraPropTypes from 'react-extra-prop-types'
import cx from 'classnames'
import {IconContext} from 'react-icons'

import Base from '../Base.core'

import './BoxIcon.scss'

/**
 * Box icon DOC styled
 */
const BoxIcon = ({
  className,
  icon,
  color,
  children,
  elementType = 'span',
  fullWidth = true,
  title,
  size,
  ...props
}) => {
  const [IconElement, setIconElement] = useState(() => () => null)
  useEffect(() => {
    if (icon) {
      import('react-icons/bi')
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
      className={cx('sui-studio-doc-icon sui-studio-doc-icon-box', className)}
      fullWidth={fullWidth}
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
BoxIcon.displayName = 'BoxIcon'
BoxIcon.propTypes = {
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
BoxIcon.defaultProps = {}

export default BoxIcon

export {BoxIcon}
