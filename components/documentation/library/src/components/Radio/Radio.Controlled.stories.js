/* eslint react/prop-types: 0 */
import React, {useState} from 'react'

import {Radio} from '../Radio/Radio'

export default {
  title: 'Components/Radio/Radio/Controlled',
  component: Radio
}

const Template = ({checked, onClick, ...args}) => {
  const [checkedState, setCheckedState] = useState(checked)
  return (
    <Radio
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
