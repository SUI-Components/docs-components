/* eslint react/prop-types: 0 */
import React, {forwardRef, useRef, useState} from 'react'
import cx from 'classnames'
import Color from 'color'

import Base from '../Base.core'
import useMergeRefs from '../../hooks/useMergeRefs/useMergeRefs'
import useComputedStyle from '../../hooks/useComputedStyle/useComputedStyle'

import './BackgroundColorConsumer.scss'
import PropTypes from 'prop-types'

/**
 * Pantone card of the background element color
 */
const BackgroundColorConsumer = forwardRef(
  (
    {
      className,
      onClick,
      onDoubleClick,
      children,
      elementType = 'div',
      ...props
    },
    forwardedRef
  ) => {
    const currentRef = useRef()
    const ref = useMergeRefs(forwardedRef, currentRef)
    const [color, setColor] = useState()
    useComputedStyle(currentRef, 'background-color', color => {
      setColor(Color(color))
    })
    return (
      <Base
        {...props}
        className={cx(
          'sui-studio-doc',
          'sui-studio-doc-get-background',
          className
        )}
        role="button"
        ref={ref}
        elementType={elementType}
      >
        {color !== undefined && children !== undefined
          ? children({color})
          : null}
      </Base>
    )
  }
)
BackgroundColorConsumer.displayName = 'BackgroundColorConsumer'
BackgroundColorConsumer.propTypes = {
  children: PropTypes.func.isRequired
}
BackgroundColorConsumer.defaultProps = {}

export default BackgroundColorConsumer

export {BackgroundColorConsumer}
