/* eslint react/prop-types: 0 */
import React, {useState} from 'react'

import {Radio, RadioGroup} from '../Radio/Radio'

export default {
  title: 'Components/Radio/RadioGroup/Controlled',
  component: RadioGroup
}

const Template = ({value, onChange, ...args}) => {
  const [valueState, setValueState] = useState(value)
  return (
    <RadioGroup
      {...args}
      value={valueState}
      onChange={(event, value) => {
        setValueState(value)
        onChange(event, value)
      }}
    >
      <Radio label="a" value={1} />
      <Radio label="b" value={2} />
      <Radio label="c" value={3} />
    </RadioGroup>
  )
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  label: 'label',
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Unchecked.argTypes = {}

export const Checked = Template.bind({})

Checked.args = {
  value: 1,
  label: 'label',
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Checked.argTypes = {}
