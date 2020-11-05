/* eslint react/prop-types: 0 */
import React from 'react'

import Demo from './Demo.core'

export default {
  title: 'Utils/Demo',
  component: Demo,
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

const Template = props => <Demo {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'demo'
}
