/* eslint react/prop-types: 0 */
import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button/Button',
  component: Button,
  argTypes: {}
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  outline: true
}

export const Deprecated = args => (
  <>
    <Template {...args} />
    <Template {...args} outline />
  </>
)

Deprecated.args = {
  children: 'Button',
  deprecated: true
}
