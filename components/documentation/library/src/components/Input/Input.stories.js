/* eslint react/prop-types: 0 */
import React from 'react'

import Input from './Input'

export default {
  title: 'Components/Input/Input',
  component: Input,
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: {
          undefined: undefined,
          light: 'light',
          dark: 'dark'
        }
      }
    }
  }
}

const Template = ({children, ...args}) => <Input {...args} />

export const Base = Template.bind({})

Base.args = {defaultValue: 'Input'}
