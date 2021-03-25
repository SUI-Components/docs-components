/* eslint react/prop-types: 0 */
import React from 'react'

import {Radio, RadioGroup} from '../Radio/Radio'

export default {
  title: 'Components/Radio/RadioGroup/Uncontrolled',
  component: RadioGroup
}

const Template = ({...args}) => (
  <RadioGroup {...args}>
    <Radio label="a" value={1} />
    <Radio label="b" value={2} />
    <Radio label="c" value={3} />
  </RadioGroup>
)

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
  defaultValue: 1,
  label: 'label',
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Checked.argTypes = {}
