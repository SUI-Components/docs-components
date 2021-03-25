/* eslint react/prop-types: 0 */
import React, {useEffect, useContext, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {Radio, RadioGroup, RadioGroupContext} from './Radio'
import {Button, ButtonGroup} from '../Button/Button'

import './Radio.scss'
import useControlledState from '../../hooks/useControlledState/useControlledState'

/**
 * The `<input type="radio">` defines a radio button styled like a button.
 * RadioButton buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.
 */
const RadioButton = forwardRef(
  (
    {
      label,
      value,
      className,
      onClick,
      onChange,
      defaultChecked = false,
      checked,
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
      setCheckedState(!checkedState)
      if (setContextState) {
        setContextState(event, {value: checkedState ? undefined : value})
      }
      if (onClick) {
        onClick(event, checkedState ? undefined : value)
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
        ref={forwardedRef}
      >
        <Radio
          className="sui-studio-doc-radio-button__radio"
          onChange={onChange}
          checked={checkedState}
          label={label}
          value={value}
        />
      </Button>
    )
  }
)

RadioButton.displayName = 'RadioButton'
RadioButton.propTypes = {
  /*
   * on click callback event (event, value)
   */
  onClick: PropTypes.func
}
RadioButton.defaultProps = {}

/**
 * Radio button options element wrapper
 */
const RadioButtonGroup = forwardRef(
  (
    {
      className,
      children,
      elementType = 'div',
      onChange,
      name,
      defaultValue,
      value,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <RadioGroup
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        value={value}
      >
        <ButtonGroup
          {...props}
          className={cx('sui-studio-doc-radio-button', className)}
          elementType={elementType}
          ref={forwardedRef}
        >
          {children}
        </ButtonGroup>
      </RadioGroup>
    )
  }
)
RadioButtonGroup.displayName = 'RadioButtonGroup'
RadioButtonGroup.propTypes = {
  /*
   * form field name
   */
  name: PropTypes.string,
  /*
   * Value selected
   */
  value: PropTypes.string,
  /*
   * initial value selected
   */
  defaultValue: PropTypes.string
}
RadioButtonGroup.defaultProps = {}

export default RadioButton

export {RadioButton, RadioButtonGroup}
