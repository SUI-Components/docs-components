/* eslint react/prop-types: 0 */
import React from 'react'

import {H4} from './Heading'

export default {
  title: 'Components/Heading/H4',
  component: H4,
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

const Template = props => <H4 {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'H4'
}
