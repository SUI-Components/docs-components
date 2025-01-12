/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {withDocumentationProvider} from '../Base.core'

import './Grid.scss'

const range = (length, start = 0) => {
  return Array.from({length}, (_, i) => start + i)
}
const isNumeric = num => !isNaN(num)

export const ALIGN = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
}

/**
 * div element css-grid styled in order to allocate elements
 */
let Grid = forwardRef(
  (
    {
      children,
      className,
      gutter = 0,
      cols = 1,
      style,
      mode,
      elementType = 'div',
      ...props
    },
    forwardedRef
  ) => {
    const element = {type: elementType}
    const [gridRowGap, gridColumnGap] = `${gutter}`.split(',')
    return (
      <element.type
        {...props}
        style={{
          gridRowGap: isNumeric(gridRowGap) ? `${gridRowGap}px` : gridRowGap,
          gridColumnGap: isNumeric(gridColumnGap)
            ? `${gridColumnGap}px`
            : gridColumnGap,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          ...style
        }}
        data-theme-mode={mode}
        className={cx('sui-studio-doc-grid', className)}
        ref={forwardedRef}
      >
        {children}
      </element.type>
    )
  }
)

Grid = withDocumentationProvider(Grid)
Grid.displayName = 'Grid'
Grid.propTypes = {}
Grid.defaultProps = {}

/**
 * div element css-grid styled in order to allocate elements in the grid disposed.
 */
let Cell = forwardRef(
  (
    {
      children,
      className,
      mode,
      offset = 0,
      span = 1,
      style,
      align,
      elementType = 'div',
      ...props
    },
    forwardedRef
  ) => {
    const element = {type: elementType}
    return (
      <>
        {range(offset).map(index => (
          <element.type
            className={cx(
              'sui-studio-doc-grid-cell',
              'sui-studio-doc-grid-cell-offset',
              className
            )}
            style={{gridColumn: 'auto / span 1'}}
            key={index}
          />
        ))}
        <element.type
          {...props}
          style={{
            gridColumn: `auto / span ${span}`,
            ...style
          }}
          data-theme-mode={mode}
          className={cx(
            'sui-studio-doc-grid-cell',
            {
              [`sui-studio-doc-grid-cell-ta-${align}`]: align
            },
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </element.type>
      </>
    )
  }
)

Cell = withDocumentationProvider(Cell)

Cell.displayName = 'Cell'
Cell.propTypes = {
  align: PropTypes.oneOf(Object.values(ALIGN))
}
Cell.defaultProps = {}

export default Grid

export {Cell, Grid}
