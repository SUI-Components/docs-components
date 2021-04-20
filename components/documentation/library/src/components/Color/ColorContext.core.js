import React, {createContext, useContext} from 'react'
import ExtraPropTypes from 'react-extra-prop-types'
import Color from 'color'
import useControlledState from '../../hooks/useControlledState/useControlledState'
import cloneElementReferenced from '../../helpers/cloneElementReferenced'
import Children from '../Children.core'
import PropTypes from 'prop-types'

export const ColorContext = createContext(undefined)

export const ColorContextProvider = ({defaultColor, color, children}) => {
  const [stateColor, setStateColor] = useControlledState(
    color ? Color(color) : undefined,
    defaultColor ? Color(defaultColor) : undefined
  )
  const setColor = color => setStateColor(Color(color))
  return (
    <ColorContext.Provider value={{color: stateColor, setColor}}>
      {children}
    </ColorContext.Provider>
  )
}

ColorContextProvider.propTypes = {
  defaultColor: ExtraPropTypes.color,
  color: ExtraPropTypes.color,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
ColorContextProvider.defaultProps = {
  defaultColor: 'transparent'
}
ColorContextProvider.displayName = 'ColorContextProvider'

export const ColorContextConsumer = ({children, ...props}) => {
  const colorContext = useContext(ColorContext)
  return cloneElementReferenced(
    <Children {...props} {...colorContext}>
      {children}
    </Children>
  )
}

ColorContextConsumer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
ColorContextConsumer.defaultProps = {}
ColorContextConsumer.displayName = 'ColorContextConsumer'

export default ColorContext
