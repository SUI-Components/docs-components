/* eslint react/prop-types: 0 */
import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Base from '../Base.core'
import Text from '../Text/Text'

import './Radio.scss'

export const RadioGroupContext = React.createContext()

/**
 * The `<input type="radio">` defines a radio button.
 * RadioButton buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.
 */
const Radio = ({
  label,
  className,
  defaultChecked = false,
  onClick,
  onChange = () => null,
  checked,
  value,
  name,
  ...props
}) => {
  const radioGroupContext = useContext(RadioGroupContext) || {}
  const contextValue = radioGroupContext.value
  const setContextState = radioGroupContext.setContextState
  const [checkedState, setCheckedState] = useState(
    defaultChecked === undefined ? defaultChecked : checked
  )
  useEffect(() => {
    if (contextValue === undefined) {
      return
    }
    if (value) {
      setCheckedState(contextValue === value.toString())
    }
  }, [contextValue, setCheckedState, value])
  const onClickHandler = event => {
    const value = event.target.value
    if (setContextState && event.target.checked === true) {
      setContextState({value})
    }
    setCheckedState(!checkedState)
  }
  return (
    <>
      <Base
        {...props}
        elementType="input"
        type="radio"
        className={cx('sui-studio-doc-radio', className)}
        onClick={onClickHandler}
        onChange={onChange}
        checked={checkedState}
        aria-label={label || value}
        value={value}
        name={name || radioGroupContext.name}
      />
      {(label || value) && <Text elementType="label">{label || value}</Text>}
    </>
  )
}

Radio.displayName = 'Radio'
Radio.propTypes = {
  /**
   * controlled active checkbox value
   */
  checked: PropTypes.bool,
  /**
   * initial checkbox value
   */
  defaultChecked: PropTypes.bool,
  /**
   * element value result
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}
Radio.defaultProps = {
  checked: false
}

/**
 * Radio options element wrapper
 */
const RadioGroup = ({
  className,
  children,
  elementType = 'div',
  value,
  label,
  name,
  ...props
}) => {
  const [context, setContext] = useState({name, label, value})
  const setContextState = (newContext = {}) =>
    setContext({...context, ...newContext})
  return (
    <Base
      {...props}
      className={cx('sui-studio-doc-radio-group', className)}
      elementType={elementType}
      role="radiogroup"
      aria-labelledby={label}
      name={name}
    >
      <RadioGroupContext.Provider value={{...context, setContextState}}>
        {children}
      </RadioGroupContext.Provider>
    </Base>
  )
}

RadioGroup.displayName = 'RadioGroup'
RadioGroup.propTypes = {}
RadioGroup.defaultProps = {}

export default Radio

export {Radio, RadioGroup}
