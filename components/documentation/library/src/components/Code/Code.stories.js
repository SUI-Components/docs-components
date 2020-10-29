/* eslint react/prop-types: 0 */
import React from 'react'

import Code from './Code'

export default {
  title: 'Components/Code/Code',
  component: Code,
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

const Template = props => <Code {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'Code'
}
