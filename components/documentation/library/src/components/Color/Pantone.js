/* eslint react/prop-types: 0 */
import React, {forwardRef, useState, useEffect, useMemo} from 'react'
import cx from 'classnames'
import debounce from 'lodash.debounce'
import {useCopyToClipboard} from 'react-use'
import Color from 'color'

import useControlledState from '../../hooks/useControlledState/useControlledState'
import useColorAPINameHook from './useColorAPINameHook.hook'
import Base from '../Base.core'

import './Pantone.scss'

const fromPercent = valNum => {
  const decimalValue = Math.round((valNum * 255) / 100)
  let hexValue
  if (valNum < 7) {
    hexValue = '0' + decimalValue.toString(16).toUpperCase()
  } else {
    hexValue = decimalValue.toString(16).toUpperCase()
  }
  return hexValue
}

const DISPLAY_MODES = {
  HEX: color => `${color.hex()}${fromPercent(color.valpha * 100)}`,
  RGB: color => color.rgb().string(),
  HSL: color => color.hsl().string(),
  CMYK: color =>
    `cmyk(${color
      .cmyk()
      .round()
      .array()
      .join(', ')
      .toString()})`
}

const DEFAULT_DISPLAY_MODE = 'HEX'
const DEFAULT_COLOR = 'transparent'

const clickHandler = ({
  color,
  setMode,
  mode,
  onClick,
  onDoubleClick,
  tokenName,
  copyToClipboard
}) => event => {
  switch (event.detail) {
    case 1:
      if (mode || tokenName !== undefined) {
        copyToClipboard(tokenName || DISPLAY_MODES[mode](color))
      }
      if (typeof onClick === 'function') {
        onClick(event, color, mode)
      }
      break
    case 2:
    default:
      setMode(Pantone.next({mode, color}))
      if (typeof onDoubleClick === 'function') {
        onDoubleClick(event, color, mode)
      }
      break
  }
}

/**
 * Pantone card of the background element color
 */
const Pantone = forwardRef(
  (
    {
      elementType = 'div',
      color: colorProp = DEFAULT_COLOR,
      displayMode,
      initialDisplayMode = DEFAULT_DISPLAY_MODE,
      className,
      onClick,
      onDoubleClick,
      onDataFetched,
      name,
      tokenName,
      ...props
    },
    forwardedRef
  ) => {
    const [mode, setMode] = useControlledState(displayMode, initialDisplayMode)
    const [data, setData] = useState({
      value: name !== undefined ? name : undefined
    })
    const [color, setColor] = useState(Color(colorProp))
    const [, copyToClipboard] = useCopyToClipboard()
    useColorAPINameHook(
      {HEXColor: DISPLAY_MODES.HEX(color).slice(1, 7), name: data.value},
      value => {
        name === undefined && setData(value)
        typeof onDataFetched === 'function' && onDataFetched(value)
      }
    )
    useEffect(() => {
      setData({value: name !== undefined ? name : undefined})
    }, [name, setData])
    useEffect(() => {
      const value = Color(colorProp)
      setColor(value)
    }, [colorProp, setColor])
    const handleClick = useMemo(
      () =>
        debounce(
          clickHandler({
            color,
            setMode,
            mode,
            onClick,
            onDoubleClick,
            tokenName,
            copyToClipboard
          }),
          200
        ),
      [color, setMode, mode, onClick, onDoubleClick, tokenName]
    )
    const tiltColor = useMemo(() => {
      if (typeof color !== 'object') {
        return 'transparent'
      } else if (color.isLight()) {
        return DISPLAY_MODES.HEX(color.darken(0.3))
      } else if (color.isDark()) {
        return DISPLAY_MODES.HEX(color.lighten(0.3))
      }
    }, [color])

    return (
      <Base
        {...props}
        elementType={elementType}
        className={cx('sui-studio-doc', 'sui-studio-doc-pantone', className)}
        role="button"
        onClick={handleClick}
        style={{
          backgroundColor: color ? DISPLAY_MODES[mode](color) : DEFAULT_COLOR
        }}
        ref={forwardedRef}
      >
        <div className="sui-studio-doc-pantone-frame-wrapper">
          <Base
            elementType="div"
            className={cx('sui-studio-doc', 'sui-studio-doc-pantone-frame', {
              'sui-studio-doc-pantone-frame-isLight':
                color?.isLight && color.isLight(),
              'sui-studio-doc-pantone-frame-isDark':
                color?.isDark && color.isDark()
            })}
          >
            <Base
              elementType="div"
              className={cx(
                'sui-studio-doc',
                'sui-studio-doc-pantone-token-name',
                {
                  'sui-studio-doc-pantone-token-name-isLight':
                    color?.isLight && color.isLight(),
                  'sui-studio-doc-pantone-token-name-isDark':
                    color?.isDark && color.isDark()
                }
              )}
            >
              <span className="sui-studio-doc-pantone-text">{tokenName}</span>
            </Base>
            <Base
              elementType="div"
              className={cx('sui-studio-doc', 'sui-studio-doc-pantone-legend', {
                'sui-studio-doc-pantone-legend-isLight':
                  color?.isLight && color.isLight(),
                'sui-studio-doc-pantone-legend-isDark':
                  color?.isDark && color.isDark()
              })}
            >
              <span className="sui-studio-doc-pantone-text">
                {typeof mode === 'string' && DISPLAY_MODES[mode](color)}
              </span>
            </Base>
            <Base
              elementType="div"
              fontWeight="bold"
              className={cx('sui-studio-doc', 'sui-studio-doc-pantone-name', {
                'sui-studio-doc-pantone-legend-isLight':
                  color?.isLight && color.isLight(),
                'sui-studio-doc-pantone-legend-isDark':
                  color?.isDark && color.isDark()
              })}
            >
              <span className="sui-studio-doc-pantone-text">
                {data.value !== null && data.value !== undefined
                  ? data.value
                  : '‎'}
              </span>
            </Base>
            <span
              className="sui-studio-doc-pantone-frame-tilt"
              style={{backgroundColor: tiltColor}}
            />
            <span
              className="sui-studio-doc-pantone-frame-tilt"
              style={{backgroundColor: tiltColor}}
            />
            <span
              className="sui-studio-doc-pantone-frame-tilt"
              style={{backgroundColor: tiltColor}}
            />
            <span
              className="sui-studio-doc-pantone-frame-tilt"
              style={{backgroundColor: tiltColor}}
            />
          </Base>
        </div>
      </Base>
    )
  }
)
Pantone.displayName = 'Pantone'
Pantone.propTypes = {}
Pantone.defaultProps = {}
Pantone.mode = ({color, mode}) => {
  const modeKeys = Object.keys(DISPLAY_MODES)
  if (modeKeys.includes(mode)) {
    return mode
  }
  let response
  switch (color.model) {
    case 'hsl':
      response = modeKeys.find(value => value === 'HSL')
      break
    case 'rgb':
    default:
      response = modeKeys.find(value => value === 'RGB')
      break
  }
  return response
}
Pantone.next = ({mode, color}) => {
  const modeKeys = Object.keys(DISPLAY_MODES)
  const index = modeKeys.indexOf(Pantone.mode({mode, color}))
  if (index >= 0) {
    return modeKeys[(index + 1) % modeKeys.length]
  } else {
    return 'RGB'
  }
}
Pantone.displayMode = mode => color => DISPLAY_MODES[mode](color)

export default Pantone

export {Pantone}
