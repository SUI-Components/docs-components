/* eslint react/prop-types: 0 */
import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {Radio, RadioGroup, RadioGroupContext} from './Radio'
import {Button, ButtonGroup} from '../Button/Button'

import './Radio.scss'

/**
 * The `<input type="radio">` defines a radio button styled like a button.
 * RadioButton buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.
 */
const RadioButton = ({
  label,
  value,
  className,
  onClick,
  onChange,
  defaultChecked = false,
  checked,
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
    if (setContextState) {
      setContextState({value})
    }
    setCheckedState(!checkedState)
    if (onClick) {
      onClick(event, !checkedState === true ? value : undefined)
    }
  }
  return (
    <Button
      {...props}
      onClick={onClickHandler}
      className={cx(
        'sui-studio-doc-radio-button',
        {'sui-studio-doc-radio-button--checked': checkedState},
        className
      )}
    >
      <Radio
        className="sui-studio-doc-radio-button__radio"
        onChange={onChange}
        defaultChecked={defaultChecked}
        checked={checkedState}
        label={label}
        value={value}
      />
    </Button>
  )
}

RadioButton.displayName = 'RadioButton'
RadioButton.propTypes = {
  /*
   * on click callback event (event, value)
   */
  onClick: PropTypes.func
}
RadioButton.defaultProps = {
  checked: false
}
/**
 * Radio button options element wrapper
 */
const RadioButtonGroup = ({
  className,
  children,
  elementType = 'div',
  onChange,
  name,
  value,
  ...props
}) => {
  return (
    <RadioGroup onChange={onChange} name={name} value={value}>
      <ButtonGroup
        {...props}
        className={cx('sui-studio-doc-radio-button', className)}
        elementType={elementType}
      >
        {children}
      </ButtonGroup>
    </RadioGroup>
  )
}

RadioButtonGroup.displayName = 'RadioButtonGroup'
RadioButtonGroup.propTypes = {
  /*
   * form field name
   */
  name: PropTypes.string.isRequired
}
RadioButtonGroup.defaultProps = {}

export default RadioButton

export {RadioButton, RadioButtonGroup}
