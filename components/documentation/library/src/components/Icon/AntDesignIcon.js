/* eslint react/prop-types: 0 */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ExtraPropTypes from 'react-extra-prop-types'
import cx from 'classnames'
import {IconContext} from 'react-icons'

import Base from '../Base.core'

import './AntDesignIcon.scss'

/**
 * Ant-Design icon DOC styled
 */
const AntDesignIcon = ({
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
      import('react-icons/ai')
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
        'sui-studio-doc-icon sui-studio-doc-icon-ant-design',
        className
      )}
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
AntDesignIcon.displayName = 'AntDesignIcon'
AntDesignIcon.propTypes = {
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
AntDesignIcon.defaultProps = {}

export default AntDesignIcon

export {AntDesignIcon}
