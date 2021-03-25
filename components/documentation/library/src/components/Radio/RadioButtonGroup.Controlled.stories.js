/* eslint react/prop-types: 0 */
import React, {useState} from 'react'

import {RadioButtonGroup, RadioButton} from '../Radio/RadioButton'

export default {
  title: 'Components/Radio/RadioButtonGroup/Controlled',
  component: RadioButtonGroup
}

const Template = ({value, onChange, ...args}) => {
  const [valueState, setValueState] = useState(value)
  return (
    <RadioButtonGroup
      {...args}
      value={valueState}
      onChange={(event, value) => {
        setValueState(value)
        onChange(event, value)
      }}
    >
      <RadioButton label="1" value={1} />
      <RadioButton label="2" value={2} />
      <RadioButton label="3" value={3} />
    </RadioButtonGroup>
  )
}

export const Checked = Template.bind({})

Checked.args = {
  value: 1,
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Checked.argTypes = {}

export const Unchecked = Template.bind({})

Unchecked.args = {
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Unchecked.argTypes = {}
