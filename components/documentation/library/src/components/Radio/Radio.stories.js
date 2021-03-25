/* eslint react/prop-types: 0 */
import React from 'react'

import {Radio} from '../Radio/Radio'

export default {
  title: 'Components/Radio/Radio',
  component: Radio
}

const Template = ({...args}) => {
  return <Radio {...args} />
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
