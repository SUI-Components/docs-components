/* eslint react/prop-types: 0 */
import React from 'react'

import {Radio, RadioGroup} from '../Radio/Radio'
import {Paragraph} from '../Paragraph/Paragraph'

export default {
  title: 'Components/Radio/RadioGroup',
  component: RadioGroup
}

const Template = ({...args}) => (
  <>
    <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
    <RadioGroup {...args}>
      <Radio label="a" value={1} />
      <Radio label="b" value={2} />
      <Radio label="c" value={3} />
    </RadioGroup>
    <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
  </>
)

export const Base = Template.bind({})

Base.args = {
  defaultChecked: false,
  label: 'label',
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
Base.argTypes = {}

export const FullWidth = args => <Template {...args} fullWidth />

FullWidth.args = {
  name: 'name',
  onChange: (event, value) => {
    console.log({event, value})
  }
}
FullWidth.argTypes = {}
