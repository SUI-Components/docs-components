/* eslint react/prop-types: 0 */
import React, {useState, useEffect, useContext, forwardRef} from 'react'
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
const Radio = forwardRef(
  (
    {
      label,
      className,
      elementType = 'input',
      type = 'radio',
      defaultChecked = false,
      onClick,
      onChange = () => null,
      checked,
      value,
      name,
      ...props
    },
    forwardedRef
  ) => {
    const radioGroupContext = useContext(RadioGroupContext) || {}
    const contextValue = radioGroupContext.value
    const setContextState = radioGroupContext.setContextState
    const [checkedState, setCheckedState] = useState(
      defaultChecked === undefined ? defaultChecked : checked
    )
    useEffect(() => {
      setCheckedState(checked)
    }, [setCheckedState, checked])
    useEffect(() => {
      if (contextValue === undefined) {
        return
      }
      if (value) {
        setCheckedState(contextValue === value.toString())
      }
    }, [contextValue, setCheckedState, value])
    const onClickHandler = event => {
      const {value, name} = event.target
      setCheckedState(!checkedState)
      if (setContextState && event.target.checked === true) {
        setContextState({value: checkedState ? undefined : value, name})
      }
      if (onClick) {
        onClick(event, checkedState ? undefined : value)
      }
    }
    return (
      <>
        <Base
          {...props}
          elementType={elementType}
          type={type}
          className={cx('sui-studio-doc-radio', className)}
          onClick={onClickHandler}
          onChange={onChange}
          checked={checkedState}
          aria-label={label || value}
          value={value}
          name={name || radioGroupContext.name}
          ref={forwardedRef}
        />
        {(label || value) && <Text elementType="label">{label || value}</Text>}
      </>
    )
  }
)
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
  /*
   * on click callback event (event, value)
   */
  onClick: PropTypes.func,
  /**
   * element value result
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Radio.defaultProps = {
  checked: false
}

/**
 * Radio options element wrapper
 */
const RadioGroup = forwardRef(
  (
    {
      className,
      children,
      elementType = 'div',
      value,
      label,
      name,
      onChange,
      ...props
    },
    forwardedRef
  ) => {
    const [context, setContext] = useState({name, label, value})
    const setContextState = (newArguments = {}) => {
      const newContext = {...context, ...newArguments}
      if (onChange) {
        onChange(newContext.value)
      }
      setContext(newContext)
    }
    useEffect(() => {
      if (value !== context.value) setContextState({value})
    }, [setContextState, value])
    return (
      <Base
        {...props}
        className={cx('sui-studio-doc-radio-group', className)}
        elementType={elementType}
        role="radiogroup"
        aria-labelledby={label}
        name={name}
        ref={forwardedRef}
      >
        <RadioGroupContext.Provider value={{...context, setContextState}}>
          {children}
        </RadioGroupContext.Provider>
      </Base>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'
RadioGroup.propTypes = {
  /*
   * on click callback event (event, value)
   */
  onClick: PropTypes.func,
  /*
   * Value given
   */
  checked: PropTypes.bool
}
RadioGroup.defaultProps = {}

export default Radio

export {Radio, RadioGroup}
