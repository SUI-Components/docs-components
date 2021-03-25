/* eslint react/prop-types: 0 */
import React from 'react'

import {Radio} from '../Radio/Radio'

export default {
  title: 'Components/Radio/Radio/Uncontrolled',
  component: Radio
}

const Template = ({...args}) => {
  return <Radio {...args} />
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
