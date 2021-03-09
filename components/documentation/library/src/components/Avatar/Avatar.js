/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Base from '../Base.core'

import './Avatar.scss'

const SHAPES = {
  CIRCLE: 'circled',
  SQUARE: 'squared',
  ROUNDED: 'rounded'
}

const SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

/**
 * Component used to represent people or objects DOC styled
 */
const Avatar = forwardRef(
  (
    {
      className,
      size,
      shape = SHAPES.CIRCLE,
      elementType = 'img',
      grayScale = undefined,
      sepia = undefined,
      saturate = undefined,
      hueRotate = undefined,
      invert = undefined,
      opacity = undefined,
      brightness = undefined,
      contrast = undefined,
      blur = undefined,
      ...props
    },
    forwardedRef
  ) => {
    const filter = Object.entries({
      ...(grayScale !== undefined && {grayscale: `${grayScale}`}),
      ...(sepia !== undefined && {sepia: `${sepia}`}),
      ...(saturate !== undefined && {saturate: `${saturate}`}),
      ...(hueRotate !== undefined && {'hue-rotate': `${hueRotate}deg`}),
      ...(invert !== undefined && {invert: `${invert}`}),
      ...(opacity !== undefined && {opacity: `${opacity}`}),
      ...(brightness !== undefined && {brightness: `${brightness}`}),
      ...(contrast !== undefined && {contrast: `${contrast}`}),
      ...(blur !== undefined && {blur: `${blur}px`})
    })
      .map(([key, value]) => `${key}(${value})`)
      .join(' ')
    return (
      <Base
        {...props}
        style={{
          ...(filter && {filter: filter}),
          ...props.style
        }}
        elementType={elementType}
        className={cx(
          'sui-studio-doc-avatar',
          {
            [`sui-studio-doc-avatar-shape-${shape}`]: shape,
            [`sui-studio-doc-avatar-size-${size}`]: size
          },
          className
        )}
        ref={forwardedRef}
      />
    )
  }
)

Avatar.propTypes = {
  /**
   * Applies a blur effect to the image. A larger value will create more blur. (0+) in px
   */
  blur: PropTypes.number,
  /**
   * Adjusts the brightness (%) of the image. (0-100)
   */
  brightness: PropTypes.number,
  /**
   * Adjusts the contrast (%) of the image. (0-100)
   */
  contrast: PropTypes.number,
  elementType: PropTypes.string,
  /**
   * Converts the image to grayscale (%). (0-100)
   */
  grayScale: PropTypes.number,
  /**
   * Applies a hue rotation on the image. The value defines the number of degrees around the color circle the image samples will be adjusted. 0deg is default, and represents the original image. (0-360)
   */
  hueRotate: PropTypes.number,
  /**
   * Inverts the samples in the image (%). (0-100)
   */
  invert: PropTypes.number,
  /**
   * Sets the opacity (%) level for the image. The opacity-level describes the transparency-level (0-100)
   */
  opacity: PropTypes.number,
  /**
   * Saturates (%) the image. (0-100)
   */
  saturate: PropTypes.number,
  /**
   * Converts the image to sepia (%). (0-100)
   */
  sepia: PropTypes.number,
  /**
   * Avatar shape type
   **/
  shape: PropTypes.oneOf(Object.values(SHAPES)),
  /**
   * Avatar size type
   **/
  size: PropTypes.oneOf(Object.values(SIZES))
}
Avatar.defaultProps = {}

Avatar.displayName = 'Avatar'

Avatar.SHAPES = SHAPES
Avatar.SIZES = SIZES

export default Avatar

export {Avatar}
