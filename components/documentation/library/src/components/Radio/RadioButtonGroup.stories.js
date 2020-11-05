/* eslint react/prop-types: 0 */
import React from 'react'

import {RadioButtonGroup, RadioButton} from '../Radio/RadioButton'

export default {
  title: 'Components/Radio/RadioButtonGroup',
  component: RadioButtonGroup
}

const Template = ({...args}) => (
  <RadioButtonGroup {...args}>
    <RadioButton label="1" value="1" />
    <RadioButton label="2" value="2" />
    <RadioButton label="3" value="3" />
  </RadioButtonGroup>
)

export const Base = Template.bind({})

Base.args = {name: 'name'}
Base.argTypes = {}

export const FullWidth = args => <Template {...args} fullWidth />

FullWidth.args = {name: 'name'}
FullWidth.argTypes = {}
