/* eslint react/prop-types: 0 */
import React, {useEffect, useContext, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Base from '../Base.core'
import Text from '../Text/Text'
import useControlledState from '../../hooks/useControlledState/useControlledState'

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
    const [checkedState, setCheckedState] = useControlledState(
      checked,
      defaultChecked
    )
    useEffect(() => {
      if (contextValue === undefined) {
        return
      }
      if (value !== undefined) {
        setCheckedState(contextValue === value)
      }
    }, [contextValue, setCheckedState, value])
    const onClickHandler = event => {
      const {name} = event.target
      setCheckedState(!checkedState)
      if (setContextState && event.target.checked === true) {
        setContextState(event, {value: checkedState ? undefined : value, name})
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
Radio.defaultProps = {}

/**
 * Radio options element wrapper
 */
const RadioGroup = forwardRef(
  (
    {
      className,
      children,
      elementType = 'div',
      defaultValue,
      value,
      label,
      name,
      onChange,
      ...props
    },
    forwardedRef
  ) => {
    const [valueState, setValueState] = useControlledState(value, defaultValue)
    const setContextState = (event, newArguments = {}) => {
      const newContext = {name, label, value: valueState, ...newArguments}
      if (onChange) {
        onChange(event, newContext.value)
      }
      setValueState(newContext.value)
    }
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
        <RadioGroupContext.Provider
          value={{name, label, value: valueState, setContextState}}
        >
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
