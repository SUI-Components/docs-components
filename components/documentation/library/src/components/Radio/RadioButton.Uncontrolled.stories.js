/* eslint react/prop-types: 0 */
import React from 'react'

import {RadioButton} from '../Radio/RadioButton'

export default {
  title: 'Components/Radio/RadioButton/Uncontrolled',
  component: RadioButton
}

const Template = ({...args}) => {
  return <RadioButton {...args} />
}

export const Checked = Template.bind({})

Checked.args = {
  defaultChecked: true,
  label: 'label',
  value: 'value',
  onClick: (event, value) => {
    console.log({event, value})
  }
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  defaultChecked: false,
  label: 'label',
  value: 'value',
  onClick: (event, value) => {
    console.log({event, value})
  }
}
