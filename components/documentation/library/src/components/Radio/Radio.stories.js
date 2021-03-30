/* eslint react/prop-types: 0 */
import React from 'react'

import {Radio} from '../Radio/Radio'
import {Paragraph} from '../Paragraph/Paragraph'

export default {
  title: 'Components/Radio/Radio',
  component: Radio
}

const Template = ({...args}) => {
  return (
    <>
      <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
      <Radio {...args} />
      <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
    </>
  )
}

export const Base = Template.bind({})

Base.args = {
  defaultChecked: false,
  label: 'label',
  value: 'value',
  onClick: (event, value) => {
    console.log({event, value})
  }
}
Base.argTypes = {}
