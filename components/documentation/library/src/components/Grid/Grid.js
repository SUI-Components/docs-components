/* eslint react/prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {withConditionalProvider} from '../Base.core'

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
let Grid = ({
  children,
  className,
  gutter = 0,
  cols = 1,
  style,
  mode,
  elementType = 'div',
  ...props
}) => {
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
      className={cx(
        'sui-studio-doc-grid',
        {[`sui-studio-doc-grid-mode-${mode}`]: mode},
        className
      )}
    >
      {children}
    </element.type>
  )
}

Grid = withConditionalProvider(Grid)
Grid.displayName = 'Grid'
Grid.propTypes = {}
Grid.defaultProps = {}

/**
 * div element css-grid styled in order to allocate elements in the grid disposed.
 */
let Cell = ({
  children,
  className,
  mode,
  offset = 0,
  span = 1,
  style,
  align,
  elementType = 'div',
  ...props
}) => {
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
        className={cx(
          'sui-studio-doc-grid-cell',
          {
            [`sui-studio-doc-grid-cell-mode-${mode}`]: mode,
            [`sui-studio-doc-grid-cell-ta-${align}`]: align
          },
          className
        )}
      >
        {children}
      </element.type>
    </>
  )
}

Cell = withConditionalProvider(Cell)

Cell.displayName = 'Cell'
Cell.propTypes = {
  align: PropTypes.oneOf(Object.values(ALIGN))
}
Cell.defaultProps = {}

export default Grid

export {Cell, Grid}
