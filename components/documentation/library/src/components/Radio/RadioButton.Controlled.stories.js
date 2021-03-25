/* eslint react/prop-types: 0 */
import React, {useState} from 'react'

import {RadioButton} from '../Radio/RadioButton'

export default {
  title: 'Components/Radio/RadioButton/Controlled',
  component: RadioButton
}

const Template = ({checked, onClick, ...args}) => {
  const [checkedState, setCheckedState] = useState(checked)
  return (
    <RadioButton
      {...args}
      checked={checkedState}
      onClick={(event, value) => {
        setCheckedState(value !== undefined)
        onClick(event, value)
      }}
    />
  )
}

export const Checked = Template.bind({})

Checked.args = {
  checked: true,
  label: 'label',
  value: 'value',
  onClick: (event, value) => {
    console.log({event, value})
  }
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  checked: false,
  label: 'label',
  value: 'value',
  onClick: (event, value) => {
    console.log({event, value})
  }
}
